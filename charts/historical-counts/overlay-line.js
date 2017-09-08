import { bisector } from 'd3';
import moment from 'moment';

// Bisect abstraction for finding timestamps
const bisect = bisector(d => d.timestamp);

export default function overlayLine(selection,
  timeScale, countScale, domainStart, domainEnd, graphWidth, graphHeight, initialCount, timeZoneLabel, timeZoneOffset,
  overlayDialogTopBottomMargin, overlayDialogBottomTopMargin, overlayDialogBorderRadius,
  overlayDialogTopWidth, overlayDialogTopHeight, overlayDialogBottomWidth, overlayDialogBottomHeight,
  overlayDialogTopIconCenterOffset, overlayDialogTopTextCenterOffset,
  data, mouseX
) {
  const now = moment.utc();

  // Calculate, given a mouse X coordinate, the count and time at that x coordinate.
  let timeAtPosition, itemIndexAtOverlayPosition, countAtPosition, dataToJoin;
  timeAtPosition = timeScale.invert(mouseX); // The time the user is hovering over, as a number.
  itemIndexAtOverlayPosition = bisect.right(data, timeAtPosition) - 1; // Where on the line is that time?

  // FIXME: another bug: data.length must be > 0
  // If the user is hovering over where the data is in the chart...
  if (domainStart <= timeAtPosition && Math.min(domainEnd, now.valueOf()) > timeAtPosition) {
    // ... get the count where the user is hovering.
    const eventAtPosition = data[itemIndexAtOverlayPosition];
    countAtPosition = eventAtPosition ? eventAtPosition.count : initialCount;

    // If a mouse position was passed that is null, (ie, the mouse isn't in the chart any longer)
    // then disregard it so the overlay line will be deleted.
    dataToJoin = mouseX === null ? [] : [mouseX];
  } else {
    // The user isn't hovering over any data, so remove the overlay line.
    dataToJoin = [];
  }

  const overlaySelection = selection.selectAll('.historical-counts-overlay-line').data(dataToJoin);

  //
  // Enter
  //

  const enteringGroup = overlaySelection.enter()
    .append('g')
      .attr('class', 'historical-counts-overlay-line')

  // Overlay line
  enteringGroup.append('path')
    .attr('class', 'historical-counts-overlay-line-path')
    .attr('d', [
      `M0,${-1 * (overlayDialogTopBottomMargin + overlayDialogBorderRadius)}`,
      `V${graphHeight + overlayDialogTopBottomMargin + overlayDialogBottomTopMargin + (overlayDialogBorderRadius * 2)}`
    ].join(''))

  enteringGroup.append('circle')
    .attr('class', 'historical-counts-overlay-circle')
    .attr('cx', 0)
    .attr('cy', 0) // NOTE: overridden in merge below
    .attr('r', 4)

  // Draw overlay top box
  const overlayDialogTopGroup = enteringGroup.append('g')
    .attr('class', 'historical-counts-overlay-top')

  overlayDialogTopGroup.append('rect')
    .attr('class', 'historical-counts-overlay-top-shadow')
    .attr('x', -1 * (overlayDialogTopWidth / 2))
    .attr('y', -1 * (overlayDialogTopHeight + overlayDialogTopBottomMargin))
    .attr('width', overlayDialogTopWidth)
    .attr('height', overlayDialogTopHeight)
    .attr('rx', overlayDialogBorderRadius)
    .attr('ry', overlayDialogBorderRadius)

  overlayDialogTopGroup.append('rect')
    .attr('class', 'historical-counts-overlay-top-bg')
    .attr('x', -1 * (overlayDialogTopWidth / 2))
    .attr('y', -1 * (overlayDialogTopHeight + overlayDialogTopBottomMargin))
    .attr('width', overlayDialogTopWidth)
    .attr('height', overlayDialogTopHeight)
    .attr('rx', overlayDialogBorderRadius)
    .attr('ry', overlayDialogBorderRadius)

  overlayDialogTopGroup.append('text')
    .attr('class', 'historical-counts-overlay-top-text')
    .attr('x', 0)
    .attr('y', -1 * ((overlayDialogTopHeight + overlayDialogTopBottomMargin) / 2))
    .attr('text-anchor', 'middle')

  const personIcon = overlayDialogTopGroup.append('g')
    .attr('transform', `translate(${-1 * overlayDialogTopIconCenterOffset},${-1 * ((overlayDialogTopHeight + overlayDialogTopBottomMargin) / 2) - 14})`)
    .attr('fill', 'none')
    .attr('fill-rule', 'evenodd')
    .attr('stroke', `#4198FF`)
    .attr('stroke-width', 1.5)
    .attr('stroke-linejoin', 'round')

  personIcon.append('path')
    .attr('d', `M9.42856667,4 C9.42856667,6.20911111 7.89356667,8 6.00001111,8 C4.10645556,8 2.57145556,6.20911111 2.57145556,4 C2.57145556,1.79088889 4.10645556,0 6.00001111,0 C7.89356667,0 9.42856667,1.79088889 9.42856667,4 L9.42856667,4 Z`)
  personIcon.append('path')
    .attr('d', 'M12,16 L12,11 C12,9.33688889 10.6392222,8 8.97611111,8 L3.02388889,8 C1.36077778,8 0,9.33688889 0,11 L0,16 L12,16 L12,16 Z')
  personIcon.append('path')
    .attr('d', `M3,12 L3,16`)
  personIcon.append('path')
    .attr('d', `M9,12 L9,16`)

  // Draw overlay bottom box
  const overlayDialogBottomGroup = enteringGroup.append('g')
    .attr('class', 'historical-counts-overlay-bottom')

  overlayDialogBottomGroup.append('rect')
    .attr('class', 'historical-counts-overlay-bottom-shadow')
    .attr('x', -1 * (overlayDialogBottomWidth / 2))
    .attr('y', graphHeight + overlayDialogBottomTopMargin)
    .attr('width', overlayDialogBottomWidth)
    .attr('height', overlayDialogBottomHeight)
    .attr('rx', overlayDialogBorderRadius)
    .attr('ry', overlayDialogBorderRadius)

  overlayDialogBottomGroup.append('rect')
    .attr('class', 'historical-counts-overlay-bottom-bg')
    .attr('x', -1 * (overlayDialogBottomWidth / 2))
    .attr('y', graphHeight + overlayDialogBottomTopMargin)
    .attr('width', overlayDialogBottomWidth)
    .attr('height', overlayDialogBottomHeight)
    .attr('rx', overlayDialogBorderRadius)
    .attr('ry', overlayDialogBorderRadius)
    .attr('stroke-width', 1)

  overlayDialogBottomGroup.append("text")
    .attr('class', 'historical-counts-overlay-bottom-text')
    .attr('x', -1 * (overlayDialogBottomWidth / 2) + (overlayDialogBottomWidth / 2))
    .attr('y', graphHeight + overlayDialogBottomTopMargin + ((overlayDialogBottomHeight + 10) / 2))
    .attr('text-anchor', 'middle')


  //
  // Merge
  //

  const mergingGroup = enteringGroup
    .merge(overlaySelection)
      .attr('transform', d => `translate(${d},0)`)

  mergingGroup.select('circle')
    .attr('cy', countScale(countAtPosition))

  // If the label would go over the edge of the graph, provide a transformation such that
  // the label is pinned the edge of the graph
  mergingGroup.select('.historical-counts-overlay-bottom')
    .attr('transform', function(d) {
      let phaseShift = 0;

      // The start of the graph.
      if (mouseX < (overlayDialogBottomWidth / 2)) {
        phaseShift -= mouseX - (overlayDialogBottomWidth / 2)
      }

      // The end of the graph.
      if (mouseX > graphWidth - (overlayDialogBottomWidth / 2)) {
        phaseShift += graphWidth - mouseX - (overlayDialogBottomWidth / 2)
      }

      return `translate(${phaseShift},0)`;
    })

  mergingGroup.select('.historical-counts-overlay-top')
    .attr('transform', function(d) {
      let phaseShift = 0;

      // The start of the graph.
      if (mouseX < (overlayDialogTopWidth / 2)) {
        phaseShift -= mouseX - (overlayDialogTopWidth / 2)
      }

      // The end of the graph.
      if (mouseX > graphWidth - (overlayDialogTopWidth / 2)) {
        phaseShift += graphWidth - mouseX - (overlayDialogTopWidth / 2)
      }

      return `translate(${phaseShift},0)`;
    });

  mergingGroup.select('.historical-counts-overlay-bottom-text')
    .text(moment(timeAtPosition).add(timeZoneOffset, 'hours').format(`hh:mm A[${timeZoneLabel ? ` (${timeZoneLabel}) ` : ' '}]ddd MMM YY`));

  mergingGroup.select('.historical-counts-overlay-top-text')
    .attr('transform', `translate(${overlayDialogTopTextCenterOffset},0)`)
    .text(countAtPosition);

  //
  // Exit
  //

  overlaySelection.exit()
    .remove('.overlay-line');
}
