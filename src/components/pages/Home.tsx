import React, {useRef,useEffect} from 'react';
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

export default () => {

	const svg_ref = useRef<SVGSVGElement>(null)
	const data = [5, 15, 13]

	const build = (data: Array<number>) => {
		const width = 200,
		scaleFactor = 10,
		barHeight = 20;

		const graph = d3.select(svg_ref.current)
		.attr("width", width)
		.attr("height", barHeight * data.length);

		const bar = graph.selectAll("g")
		.data(data)
		.enter()
		.append("g")
		.attr("transform", function(d, i) {
		  return "translate(0," + i * barHeight + ")";
		});

		bar.append("rect")
			.attr("width", function(d) {
		      return d * scaleFactor;
		})
			.attr("height", barHeight - 1);

		bar.append("text")
			.attr("x", function(d) { return (d*scaleFactor); })
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d; });

    }

	useEffect(() => {
		build(data);
	}, [data])

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
					<svg ref={svg_ref} />
				</Box>
			</HStack>
		</Flex>
	)
}
