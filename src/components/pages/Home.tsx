import React, {useRef,useEffect} from 'react';
import axios from 'axios'
import * as d3 from 'd3'
/*
** components
*/


/*
** chakra ui
*/

import {
	HStack,
	Flex,
	Box,
	Heading,
	Divider
} from '@chakra-ui/react';

interface dataObj {
	_id: string;
	sentence_sent_score: number
}

export default () => {

	const svg_ref = useRef<SVGSVGElement>(null)

	const build = (data: Array<dataObj>) => {
		const width = 2000,
		height = 200,
		scaleFactor = 0.0001,
		barHeight = 20;

		const graph = d3.select(svg_ref.current).attr("width", "100%").attr("height", barHeight * data.length);

		const bar = graph.selectAll("g").data(data).enter().append("g").attr("transform", function(d, i) {
			  return "translate(0," + i * barHeight + ")";
			});

		var y = d3.scaleBand()
	       .range([ 0, height ])
	       .domain(data.map(function(d) { return d._id; }))
	       .padding(.1);
	     svg.append("g")
	       .call(d3.axisLeft(y))

		bar.append("rect")
			.attr("width", function(d) {
		      return d.sentence_sent_score;
		})
		.attr("height", barHeight - 1);
		//
		bar.append("text")
			.attr("x", function(d) { return (d.sentence_sent_score ); })
			.attr("y", function(d) { return (d.sentence_sent_score ); })
			.attr("dy", ".35em")
			.text(function(d) { return d._id; });

    }

	useEffect(() => {
		axios.get("http://localhost:8000/api/dashboard").then((response) => {
			build(response.data.genZ)
		}).catch(error => {
			console.log(error);
		})
	}, [])

	return (
		<Flex
			p={5}
			flexDir="column"
		>
			<HStack
			>
				<Box
					p={5}
					bg="white"
					borderRadius="3xl"
					w="100%"
					h="600px"

				>
					<Heading
						as="h3"
						fontSize="xl"
						color="secondary"
						lineHeight={1}
						mb={5}
					>
						Weekly Revenue
					</Heading>
					<Box
						overflow="auto"
						width="100%" height="100%"
					>
						<svg ref={svg_ref} />
					</Box>
				</Box>
			</HStack>
		</Flex>
	)
}
