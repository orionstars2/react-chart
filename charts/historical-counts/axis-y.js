const axisYMaximumLineDashWidth = 2;
const axisYMaximumLineDashSpacing = 10;

export default function yAxis(
  selection,
  scale, graphWidth,
  smallestCount, largestCount, capacity
) {
  // Create a selection to create or update the axis.
  const yAxisSelection = selection.selectAll('.axis-y').data([
    // We want the axis to redraw if any of the below values change.
    `${capacity} ${largestCount} ${smallestCount}`,
  ]);

  // When a new axis is to be created, create a container with each label as required.
  const yAxisEnterSelection = yAxisSelection.enter();
  const yAxisEnterSelectionGroup = yAxisEnterSelection.append('g')
    .attr("class", "historical-counts-axis-y")

  // Lebel the smallest value.
  yAxisEnterSelectionGroup.append('text')
    .attr('class', 'axis-y-minimum')
    .attr('y', scale(smallestCount))
    .text(smallestCount)

  // Label the capacity, if a capacity was passed.
  if (capacity) {
    yAxisEnterSelectionGroup.append('text')
      .attr('class', 'axis-y-capacity')
      .attr('y', scale(capacity))
      .text(capacity)
  }

  // Label the largest value.
  yAxisEnterSelectionGroup.append('text')
    .attr('class', 'axis-y-maximum')
    .attr('y', scale(largestCount))
    .text(largestCount)

  // Add a dotted line horizontally at the maximum position
  yAxisEnterSelectionGroup.append('path')
    .attr('y', scale(largestCount))
    .attr('class', 'axis-y-maximum-line')

  // When updating the axis, adjust the contents of each of the above labels as well as their
  // position along the axis.
  const yAxisMergeSelection = yAxisEnterSelection.merge(yAxisSelection);

  yAxisMergeSelection.select('axis-y-minimum')
    .attr('y', scale(smallestCount))
    .text(smallestCount);

  yAxisMergeSelection.select('axis-y-capacity')
    .attr('y', scale(capacity))
    .text(capacity);

  yAxisMergeSelection.select('axis-y-maximum')
    .attr('y', scale(largestCount))
    .text(largestCount);

  // Render a dotted line at the top-most item in the y axis.
  yAxisEnterSelectionGroup.select('.axis-y-maximum-line')
    .attr('y', scale(largestCount))
    .attr('d', `M0,0${(function(graphWidth) {
      let linePath = '';
      for (let i = 0; i < graphWidth; i += axisYMaximumLineDashWidth + axisYMaximumLineDashSpacing) {
        linePath += `H${i+axisYMaximumLineDashWidth} M${i+axisYMaximumLineDashWidth+axisYMaximumLineDashSpacing},0`;
      }
      return linePath;
    })(graphWidth)}`)
}