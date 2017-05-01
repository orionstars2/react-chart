'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _storybook = require('@kadira/storybook');

var _index = require('../index');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _index2 = require('./index');

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Since this data is so large, it's been serialized below in the format:
// "count,timestamp;count,timestamp;..."
// This function converts that format into:
// [{count: 1, timestamp: "timestamp"}, ...]
function uncompressData(data) {
  return data.split(';').map(function (i) {
    var _i$split = i.split(','),
        _i$split2 = _slicedToArray(_i$split, 2),
        count = _i$split2[0],
        timestamp = _i$split2[1];

    return { count: parseInt(count), timestamp: timestamp };
  });
}

var CountGraph = (0, _index.chartAsReactComponent)(_index3.default);

(0, _storybook.storiesOf)('Count Graph', module).add('With a day\'s worth of data, with an explicit start / end.', function () {
  return React.createElement(CountGraph, {
    data: uncompressData(fullDayOfData),
    start: (0, _moment2.default)("2017-03-28T12:00:00.000Z"),
    end: (0, _moment2.default)("2017-03-29T12:00:00.000Z"),
    resets: [{ count: 0, timestamp: "2017-03-29T06:00:00.000Z" }]
  });
}).add('With a partial day\'s worth of data, with an explicit start / end.', function () {
  return React.createElement(CountGraph, {
    data: uncompressData(partialDayOfData),
    start: (0, _moment2.default)("2017-03-29T12:00:00.000Z"),
    end: (0, _moment2.default)("2017-03-30T12:00:00.000Z")
  });
}).add('Without start / end on a partial day\'s data, the graph scales to fit the data.', function () {
  return React.createElement(CountGraph, {
    data: uncompressData(partialDayOfData)
  });
}).add('With only a partial day\'s worth of data, and a start / end time.\n        Notice that the overlay line only shows when hovering over the data, and not the whitespace.', function () {
  return React.createElement(CountGraph, {
    data: uncompressData(partialDayOfData),
    start: (0, _moment2.default)("2017-03-29T10:00:00.000Z"),
    end: (0, _moment2.default)("2017-03-29T18:00:00.000Z")
  });
}).add('With negative counts', function () {
  return React.createElement(CountGraph, {
    data: uncompressData(dayOfDataWithNegatives)
  });
}).add('With data that doesn\'t include zero in the scale. This was the "drawing below the x axis" bug.', function () {
  return React.createElement(CountGraph, {
    start: "2017-04-13T08:00:00.000Z",
    end: "2017-04-13T16:00:00.000Z",
    data: [{
      "id": "evt_3qIwbJm8HKGfYlrFClzsup",
      "timestamp": "2017-04-13T15:45:12.112Z",
      "count": 91
    }, {
      "id": "evt_1um22OxjobrQdQIUPchlL0",
      "timestamp": "2017-04-13T15:45:31.678Z",
      "count": 92
    }, {
      "id": "evt_7sO06yNFvUT9qgkNLoBDb1",
      "timestamp": "2017-04-13T15:45:42.712Z",
      "count": 91
    }, {
      "id": "evt_19hX4RQNSkf34UfPHoV9QQ",
      "timestamp": "2017-04-13T15:45:49.612Z",
      "count": 92
    }, {
      "id": "evt_2GRylRgXOe0KkCtttfh8sz",
      "timestamp": "2017-04-13T15:45:50.749Z",
      "count": 93
    }, {
      "id": "evt_4d91b7PCbEGnArvnn4agjT",
      "timestamp": "2017-04-13T15:45:51.711Z",
      "count": 94
    }, {
      "id": "evt_32tlcFBGVfAbVlGxtfvlch",
      "timestamp": "2017-04-13T15:45:55.845Z",
      "count": 95
    }, {
      "id": "evt_UZhm3YpH5aXYshGdvgFtb",
      "timestamp": "2017-04-13T15:46:10.744Z",
      "count": 96
    }, {
      "id": "evt_5n5gWB34lsWjWzJTcQCW8G",
      "timestamp": "2017-04-13T15:46:12.312Z",
      "count": 97
    }, {
      "id": "evt_6i3G4iBlsELl2lm1J7gKqT",
      "timestamp": "2017-04-13T15:46:34.844Z",
      "count": 98
    }, {
      "id": "evt_3FkreYNjbgwM0kBHAOb6FE",
      "timestamp": "2017-04-13T15:46:35.344Z",
      "count": 97
    }, {
      "id": "evt_39BoupmJIpnsQZFev1fpux",
      "timestamp": "2017-04-13T15:46:57.444Z",
      "count": 98
    }, {
      "id": "evt_1wLYMSUwh3M0vEsDCPOFm3",
      "timestamp": "2017-04-13T15:47:18.943Z",
      "count": 99
    }, {
      "id": "evt_3XNuocZ0aZYElJmYYePFxE",
      "timestamp": "2017-04-13T15:47:22.244Z",
      "count": 100
    }, {
      "id": "evt_51oT6Q12RSNiRAqnnPiLL0",
      "timestamp": "2017-04-13T15:47:25.810Z",
      "count": 101
    }, {
      "id": "evt_6rL3KX6lmw5HRDJ6KP9BKF",
      "timestamp": "2017-04-13T15:47:37.910Z",
      "count": 102
    }, {
      "id": "evt_3bm845fK5C1JkqeSHTNlqE",
      "timestamp": "2017-04-13T15:47:48.943Z",
      "count": 103
    }, {
      "id": "evt_52ZzMEUnTUrrGBcJp6Kcvr",
      "timestamp": "2017-04-13T15:47:58.676Z",
      "count": 104
    }, {
      "id": "evt_60LtcH2C8ihg1a64Hl2EhJ",
      "timestamp": "2017-04-13T15:47:59.043Z",
      "count": 105
    }, {
      "id": "evt_lMxHQCgYjntpI73LuTn4b",
      "timestamp": "2017-04-13T15:48:20.143Z",
      "count": 104
    }, {
      "id": "evt_3KQJfeKLNCMdFthGXSneL4",
      "timestamp": "2017-04-13T15:48:24.876Z",
      "count": 105
    }, {
      "id": "evt_3QGgoxPt7EZGHqkmCFhSBQ",
      "timestamp": "2017-04-13T15:48:29.843Z",
      "count": 106
    }, {
      "id": "evt_2LpF8kM6JoQSbP60jTbhSY",
      "timestamp": "2017-04-13T15:48:40.109Z",
      "count": 107
    }, {
      "id": "evt_4gS1PWKZv0WpwJYyVYy2sI",
      "timestamp": "2017-04-13T15:48:40.144Z",
      "count": 108
    }, {
      "id": "evt_5Fj5MfnZIbAsOfJDSkyRRR",
      "timestamp": "2017-04-13T15:48:49.375Z",
      "count": 107
    }, {
      "id": "evt_2Od97qoqfyTzXkB1NEeTBc",
      "timestamp": "2017-04-13T15:49:00.142Z",
      "count": 108
    }, {
      "id": "evt_1F3twgo8S92fkiQoXDrVRT",
      "timestamp": "2017-04-13T15:49:04.409Z",
      "count": 109
    }, {
      "id": "evt_2tQZ7SwKPmimoEDn7IyCex",
      "timestamp": "2017-04-13T15:49:16.375Z",
      "count": 110
    }, {
      "id": "evt_5n3sTjOTBDaXHq23IaBDQA",
      "timestamp": "2017-04-13T15:49:16.675Z",
      "count": 111
    }, {
      "id": "evt_skIG8LVZffRr44YUJYyQe",
      "timestamp": "2017-04-13T15:49:20.842Z",
      "count": 112
    }, {
      "id": "evt_3Ft9CUW1hWz373NbBPRnmp",
      "timestamp": "2017-04-13T15:49:21.075Z",
      "count": 111
    }, {
      "id": "evt_2W9LuJlDJhJWTyWrRPAnGT",
      "timestamp": "2017-04-13T15:49:30.175Z",
      "count": 110
    }, {
      "id": "evt_2d7fP4tb4z2oLyqwGd2CCi",
      "timestamp": "2017-04-13T15:49:34.176Z",
      "count": 111
    }, {
      "id": "evt_72m6P8Jez0ANZPouFoHyIN",
      "timestamp": "2017-04-13T15:49:35.542Z",
      "count": 110
    }, {
      "id": "evt_4Vt50BjvvTqMCFfMPBuMnx",
      "timestamp": "2017-04-13T15:49:48.474Z",
      "count": 111
    }, {
      "id": "evt_7giboM2kphxrav8zBZj7QV",
      "timestamp": "2017-04-13T15:49:48.975Z",
      "count": 112
    }]
  });
}).add('Without any data', function () {
  return React.createElement(CountGraph, { data: [] });
}).add('With adding points to the graph over time. This is to show that the graph can receive updates.', function () {
  var AddNewPointsToGraph = function (_React$Component) {
    _inherits(AddNewPointsToGraph, _React$Component);

    function AddNewPointsToGraph(props) {
      _classCallCheck(this, AddNewPointsToGraph);

      var _this = _possibleConstructorReturn(this, (AddNewPointsToGraph.__proto__ || Object.getPrototypeOf(AddNewPointsToGraph)).call(this, props));

      _this.state = { data: [] };
      return _this;
    }

    _createClass(AddNewPointsToGraph, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.interval = setInterval(function () {
          _this2.setState({ data: [].concat(_toConsumableArray(_this2.state.data), [{ count: Math.floor(Math.random() * 20), timestamp: (0, _moment2.default)().toISOString() }]) });
        }, 1000);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearInterval(this.interval);
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('update', this.state.data);
        return React.createElement(CountGraph, { data: this.state.data });
      }
    }]);

    return AddNewPointsToGraph;
  }(React.Component);

  return React.createElement(AddNewPointsToGraph, null);
});

var fullDayOfData = "1,2017-03-28T12:02:11.330Z;0,2017-03-28T12:02:14.864Z;1,2017-03-28T12:02:21.997Z;2,2017-03-28T12:02:22.897Z;3,2017-03-28T12:02:35.030Z;4,2017-03-28T12:08:10.959Z;5,2017-03-28T12:10:34.591Z;6,2017-03-28T12:10:41.158Z;5,2017-03-28T12:12:31.856Z;6,2017-03-28T12:12:43.855Z;7,2017-03-28T12:14:53.954Z;8,2017-03-28T12:17:11.019Z;9,2017-03-28T12:18:04.085Z;8,2017-03-28T12:20:13.117Z;9,2017-03-28T12:20:54.350Z;10,2017-03-28T12:21:18.017Z;9,2017-03-28T12:21:20.183Z;10,2017-03-28T12:21:30.616Z;9,2017-03-28T12:27:09.645Z;8,2017-03-28T12:28:55.077Z;9,2017-03-28T12:28:55.844Z;10,2017-03-28T12:31:59.475Z;9,2017-03-28T12:32:04.142Z;10,2017-03-28T12:33:18.041Z;11,2017-03-28T12:33:22.274Z;10,2017-03-28T12:35:46.905Z;11,2017-03-28T12:37:09.938Z;12,2017-03-28T12:39:24.569Z;13,2017-03-28T12:47:25.697Z;14,2017-03-28T12:53:49.592Z;13,2017-03-28T12:55:17.825Z;14,2017-03-28T12:57:45.524Z;13,2017-03-28T12:58:07.456Z;14,2017-03-28T13:06:58.150Z;13,2017-03-28T13:09:23.948Z;14,2017-03-28T13:10:53.648Z;15,2017-03-28T13:12:19.846Z;14,2017-03-28T13:12:55.945Z;13,2017-03-28T13:14:00.744Z;12,2017-03-28T13:18:14.408Z;13,2017-03-28T13:22:38.271Z;14,2017-03-28T13:22:39.238Z;15,2017-03-28T13:24:37.337Z;14,2017-03-28T13:25:33.969Z;13,2017-03-28T13:25:38.903Z;14,2017-03-28T13:28:57.367Z;15,2017-03-28T13:30:27.333Z;16,2017-03-28T13:32:33.831Z;15,2017-03-28T13:34:40.630Z;16,2017-03-28T13:36:51.961Z;17,2017-03-28T13:36:54.530Z;16,2017-03-28T13:37:07.794Z;15,2017-03-28T13:38:06.760Z;16,2017-03-28T13:43:32.623Z;17,2017-03-28T13:50:16.918Z;18,2017-03-28T13:50:33.318Z;17,2017-03-28T13:51:25.551Z;16,2017-03-28T13:51:49.950Z;17,2017-03-28T13:53:15.549Z;18,2017-03-28T13:54:36.282Z;17,2017-03-28T13:55:12.315Z;18,2017-03-28T13:56:41.414Z;17,2017-03-28T13:57:31.379Z;18,2017-03-28T13:57:34.247Z;17,2017-03-28T13:59:05.212Z;16,2017-03-28T14:03:43.742Z;17,2017-03-28T14:04:15.341Z;18,2017-03-28T14:04:43.474Z;19,2017-03-28T14:05:06.107Z;18,2017-03-28T14:05:08.241Z;19,2017-03-28T14:05:31.340Z;18,2017-03-28T14:10:33.670Z;19,2017-03-28T14:10:52.403Z;18,2017-03-28T14:11:05.204Z;19,2017-03-28T14:11:26.969Z;20,2017-03-28T14:11:34.569Z;21,2017-03-28T14:11:36.271Z;22,2017-03-28T14:12:49.068Z;21,2017-03-28T14:13:33.401Z;20,2017-03-28T14:15:55.533Z;21,2017-03-28T14:17:31.731Z;22,2017-03-28T14:21:25.762Z;23,2017-03-28T14:23:24.527Z;22,2017-03-28T14:25:40.959Z;23,2017-03-28T14:26:39.125Z;24,2017-03-28T14:27:14.224Z;25,2017-03-28T14:29:06.757Z;24,2017-03-28T14:30:25.122Z;23,2017-03-28T14:30:44.122Z;24,2017-03-28T14:31:17.321Z;25,2017-03-28T14:32:53.120Z;26,2017-03-28T14:36:47.684Z;27,2017-03-28T14:36:49.152Z;28,2017-03-28T14:37:27.950Z;29,2017-03-28T14:38:30.716Z;30,2017-03-28T14:39:33.415Z;29,2017-03-28T14:41:50.880Z;30,2017-03-28T14:42:59.846Z;31,2017-03-28T14:44:32.378Z;32,2017-03-28T14:46:48.243Z;33,2017-03-28T14:49:17.141Z;34,2017-03-28T14:49:18.275Z;35,2017-03-28T14:49:42.607Z;34,2017-03-28T14:50:39.840Z;35,2017-03-28T14:50:52.306Z;36,2017-03-28T14:52:17.940Z;35,2017-03-28T14:52:58.838Z;34,2017-03-28T14:53:50.004Z;35,2017-03-28T14:54:05.871Z;36,2017-03-28T14:55:04.837Z;35,2017-03-28T14:55:23.736Z;34,2017-03-28T14:55:24.536Z;35,2017-03-28T14:56:40.402Z;34,2017-03-28T14:58:11.101Z;33,2017-03-28T15:00:20.366Z;32,2017-03-28T15:00:54.765Z;33,2017-03-28T15:01:10.732Z;32,2017-03-28T15:01:43.898Z;31,2017-03-28T15:03:20.630Z;32,2017-03-28T15:05:42.028Z;31,2017-03-28T15:08:51.659Z;30,2017-03-28T15:11:22.691Z;31,2017-03-28T15:11:52.123Z;32,2017-03-28T15:12:32.890Z;33,2017-03-28T15:14:12.522Z;32,2017-03-28T15:18:13.285Z;31,2017-03-28T15:19:47.651Z;32,2017-03-28T15:24:01.514Z;31,2017-03-28T15:25:39.380Z;30,2017-03-28T15:25:40.247Z;31,2017-03-28T15:26:49.279Z;30,2017-03-28T15:27:14.547Z;31,2017-03-28T15:27:25.345Z;32,2017-03-28T15:27:26.846Z;33,2017-03-28T15:29:48.376Z;34,2017-03-28T15:37:16.670Z;33,2017-03-28T15:38:55.870Z;32,2017-03-28T15:39:09.236Z;33,2017-03-28T15:40:43.968Z;34,2017-03-28T15:40:49.102Z;35,2017-03-28T15:40:50.304Z;34,2017-03-28T15:42:00.501Z;33,2017-03-28T15:42:01.068Z;32,2017-03-28T15:44:51.166Z;31,2017-03-28T15:44:51.566Z;30,2017-03-28T15:46:42.697Z;31,2017-03-28T15:46:50.066Z;32,2017-03-28T15:47:11.465Z;31,2017-03-28T15:47:20.197Z;32,2017-03-28T15:52:33.693Z;31,2017-03-28T15:53:23.726Z;32,2017-03-28T15:58:11.823Z;33,2017-03-28T15:58:28.489Z;32,2017-03-28T15:58:30.323Z;31,2017-03-28T16:00:56.054Z;32,2017-03-28T16:01:12.054Z;31,2017-03-28T16:01:14.621Z;32,2017-03-28T16:01:20.387Z;31,2017-03-28T16:01:28.487Z;30,2017-03-28T16:01:41.886Z;29,2017-03-28T16:04:00.318Z;28,2017-03-28T16:04:08.052Z;29,2017-03-28T16:04:11.286Z;28,2017-03-28T16:04:11.786Z;29,2017-03-28T16:07:30.349Z;28,2017-03-28T16:09:14.814Z;27,2017-03-28T16:10:00.847Z;28,2017-03-28T16:11:49.779Z;29,2017-03-28T16:12:27.812Z;30,2017-03-28T16:17:15.008Z;29,2017-03-28T16:17:20.509Z;28,2017-03-28T16:17:28.642Z;29,2017-03-28T16:17:38.041Z;28,2017-03-28T16:17:53.710Z;29,2017-03-28T16:26:32.935Z;28,2017-03-28T16:27:26.001Z;27,2017-03-28T16:28:19.534Z;28,2017-03-28T16:29:11.100Z;27,2017-03-28T16:29:59.137Z;28,2017-03-28T16:31:34.731Z;27,2017-03-28T16:32:46.197Z;26,2017-03-28T16:34:02.029Z;27,2017-03-28T16:35:05.528Z;28,2017-03-28T16:35:06.363Z;27,2017-03-28T16:37:05.592Z;28,2017-03-28T16:48:36.141Z;27,2017-03-28T16:49:16.606Z;28,2017-03-28T16:52:14.798Z;27,2017-03-28T16:52:25.896Z;28,2017-03-28T16:56:05.523Z;29,2017-03-28T16:57:15.889Z;28,2017-03-28T16:58:35.754Z;29,2017-03-28T16:59:02.154Z;28,2017-03-28T17:00:14.152Z;29,2017-03-28T17:00:24.086Z;30,2017-03-28T17:00:51.419Z;31,2017-03-28T17:01:34.084Z;32,2017-03-28T17:01:51.818Z;33,2017-03-28T17:05:12.881Z;34,2017-03-28T17:06:29.913Z;33,2017-03-28T17:09:15.543Z;32,2017-03-28T17:10:14.842Z;33,2017-03-28T17:12:51.506Z;34,2017-03-28T17:13:08.906Z;35,2017-03-28T17:16:31.836Z;36,2017-03-28T17:16:33.104Z;37,2017-03-28T17:19:57.033Z;38,2017-03-28T17:29:29.794Z;37,2017-03-28T17:32:56.324Z;36,2017-03-28T17:33:56.123Z;37,2017-03-28T17:34:05.523Z;38,2017-03-28T17:34:19.790Z;37,2017-03-28T17:34:48.589Z;36,2017-03-28T17:34:50.590Z;37,2017-03-28T17:43:22.382Z;36,2017-03-28T17:44:01.181Z;37,2017-03-28T17:45:20.647Z;36,2017-03-28T17:45:36.947Z;37,2017-03-28T17:46:37.379Z;38,2017-03-28T17:46:59.679Z;37,2017-03-28T17:48:44.612Z;36,2017-03-28T17:49:16.645Z;35,2017-03-28T17:49:19.045Z;34,2017-03-28T17:49:27.778Z;35,2017-03-28T17:50:29.911Z;36,2017-03-28T17:50:57.677Z;35,2017-03-28T17:52:27.443Z;36,2017-03-28T17:52:37.309Z;35,2017-03-28T17:53:47.975Z;36,2017-03-28T17:55:01.575Z;35,2017-03-28T17:55:47.276Z;36,2017-03-28T17:55:54.276Z;35,2017-03-28T17:56:49.844Z;34,2017-03-28T17:58:11.379Z;35,2017-03-28T17:58:11.612Z;36,2017-03-28T17:58:48.012Z;35,2017-03-28T17:59:20.846Z;36,2017-03-28T18:00:20.547Z;35,2017-03-28T18:00:29.080Z;36,2017-03-28T18:00:38.814Z;35,2017-03-28T18:01:55.781Z;34,2017-03-28T18:03:48.616Z;33,2017-03-28T18:04:33.348Z;34,2017-03-28T18:05:04.981Z;35,2017-03-28T18:05:55.315Z;36,2017-03-28T18:05:59.015Z;37,2017-03-28T18:06:09.948Z;36,2017-03-28T18:06:27.915Z;37,2017-03-28T18:08:49.248Z;36,2017-03-28T18:09:16.181Z;35,2017-03-28T18:10:20.747Z;34,2017-03-28T18:11:19.713Z;35,2017-03-28T18:11:46.147Z;36,2017-03-28T18:15:55.478Z;37,2017-03-28T18:18:10.277Z;36,2017-03-28T18:18:35.343Z;37,2017-03-28T18:21:08.409Z;38,2017-03-28T18:22:52.508Z;37,2017-03-28T18:24:20.407Z;38,2017-03-28T18:24:58.373Z;39,2017-03-28T18:25:00.674Z;38,2017-03-28T18:25:20.775Z;39,2017-03-28T18:25:31.774Z;40,2017-03-28T18:25:38.207Z;41,2017-03-28T18:25:54.873Z;42,2017-03-28T18:26:09.306Z;41,2017-03-28T18:28:47.771Z;40,2017-03-28T18:29:48.304Z;41,2017-03-28T18:31:45.568Z;42,2017-03-28T18:34:33.765Z;41,2017-03-28T18:38:16.595Z;42,2017-03-28T18:39:53.394Z;41,2017-03-28T18:41:25.526Z;42,2017-03-28T18:41:45.026Z;41,2017-03-28T18:41:46.460Z;42,2017-03-28T18:44:09.323Z;41,2017-03-28T18:44:55.956Z;42,2017-03-28T18:46:10.322Z;43,2017-03-28T19:01:11.311Z;44,2017-03-28T19:01:26.744Z;45,2017-03-28T19:01:54.244Z;46,2017-03-28T19:02:02.778Z;45,2017-03-28T19:02:12.710Z;44,2017-03-28T19:02:47.543Z;45,2017-03-28T19:03:52.641Z;46,2017-03-28T19:04:24.406Z;45,2017-03-28T19:06:19.867Z;46,2017-03-28T19:08:22.429Z;45,2017-03-28T19:09:44.925Z;46,2017-03-28T19:10:59.989Z;45,2017-03-28T19:11:15.089Z;44,2017-03-28T19:11:16.257Z;43,2017-03-28T19:11:21.189Z;44,2017-03-28T19:13:08.687Z;45,2017-03-28T19:13:24.688Z;46,2017-03-28T19:14:05.053Z;47,2017-03-28T19:15:16.086Z;46,2017-03-28T19:15:38.952Z;47,2017-03-28T19:15:42.919Z;46,2017-03-28T19:17:33.651Z;47,2017-03-28T19:19:14.283Z;48,2017-03-28T19:19:27.983Z;47,2017-03-28T19:19:42.816Z;48,2017-03-28T19:20:11.549Z;47,2017-03-28T19:21:08.682Z;48,2017-03-28T19:21:36.882Z;47,2017-03-28T19:21:47.015Z;48,2017-03-28T19:22:05.715Z;47,2017-03-28T19:23:52.813Z;46,2017-03-28T19:24:29.580Z;47,2017-03-28T19:25:48.179Z;48,2017-03-28T19:25:54.512Z;47,2017-03-28T19:25:55.680Z;46,2017-03-28T19:26:47.511Z;47,2017-03-28T19:28:31.543Z;48,2017-03-28T19:29:38.109Z;49,2017-03-28T19:31:30.075Z;48,2017-03-28T19:31:30.975Z;49,2017-03-28T19:31:44.841Z;48,2017-03-28T19:32:24.474Z;49,2017-03-28T19:33:41.706Z;48,2017-03-28T19:34:31.772Z;49,2017-03-28T19:35:14.439Z;50,2017-03-28T19:39:04.436Z;51,2017-03-28T19:39:04.503Z;52,2017-03-28T19:39:04.869Z;51,2017-03-28T19:41:01.034Z;52,2017-03-28T19:42:58.465Z;51,2017-03-28T19:43:15.899Z;52,2017-03-28T19:43:23.932Z;51,2017-03-28T19:45:27.897Z;52,2017-03-28T19:46:26.596Z;53,2017-03-28T19:48:12.628Z;54,2017-03-28T19:49:05.561Z;55,2017-03-28T19:50:09.793Z;56,2017-03-28T19:50:19.194Z;55,2017-03-28T19:50:21.527Z;56,2017-03-28T19:50:34.826Z;57,2017-03-28T19:50:48.893Z;58,2017-03-28T19:51:01.559Z;57,2017-03-28T19:51:05.293Z;56,2017-03-28T19:52:42.125Z;55,2017-03-28T19:52:51.992Z;54,2017-03-28T19:53:05.258Z;55,2017-03-28T19:54:48.690Z;54,2017-03-28T19:56:09.189Z;53,2017-03-28T20:00:29.719Z;54,2017-03-28T20:02:51.651Z;53,2017-03-28T20:03:47.417Z;52,2017-03-28T20:03:55.351Z;53,2017-03-28T20:04:30.883Z;52,2017-03-28T20:05:56.882Z;51,2017-03-28T20:06:39.915Z;50,2017-03-28T20:09:20.946Z;51,2017-03-28T20:13:18.639Z;50,2017-03-28T20:15:51.601Z;51,2017-03-28T20:21:00.655Z;50,2017-03-28T20:21:50.320Z;49,2017-03-28T20:28:21.210Z;50,2017-03-28T20:31:36.206Z;49,2017-03-28T20:32:16.271Z;50,2017-03-28T20:33:05.804Z;49,2017-03-28T21:18:19.972Z;48,2017-03-28T21:19:43.071Z;49,2017-03-28T21:20:57.643Z;50,2017-03-28T21:22:05.080Z;49,2017-03-28T21:22:53.550Z;50,2017-03-28T21:25:38.091Z;49,2017-03-28T21:31:36.166Z;48,2017-03-28T22:00:36.217Z;49,2017-03-28T22:01:59.749Z;48,2017-03-28T22:03:59.881Z;47,2017-03-28T22:10:18.544Z;46,2017-03-28T22:15:02.541Z;47,2017-03-28T22:28:48.696Z;48,2017-03-28T22:55:25.742Z;49,2017-03-28T22:58:22.041Z;50,2017-03-28T22:58:40.239Z;49,2017-03-28T23:00:25.104Z;50,2017-03-28T23:40:22.923Z;49,2017-03-28T23:47:46.435Z;48,2017-03-29T00:01:28.471Z;47,2017-03-29T00:01:29.805Z;48,2017-03-29T08:50:08.721Z;49,2017-03-29T09:09:12.640Z;48,2017-03-29T09:09:14.674Z;49,2017-03-29T09:09:22.274Z;48,2017-03-29T09:09:25.374Z;49,2017-03-29T09:09:40.307Z;50,2017-03-29T09:09:40.742Z;49,2017-03-29T09:15:29.768Z;50,2017-03-29T09:16:20.368Z;49,2017-03-29T09:22:54.796Z;50,2017-03-29T11:27:16.572Z;51,2017-03-29T11:31:00.103Z;50,2017-03-29T11:31:53.569Z;49,2017-03-29T11:33:53.067Z;48,2017-03-29T11:33:54.668Z;49,2017-03-29T11:33:59.468Z;48,2017-03-29T11:34:46.467Z;49,2017-03-29T11:35:07.766Z;48,2017-03-29T11:35:52.032Z;49,2017-03-29T11:36:10.399Z;50,2017-03-29T11:37:54.898Z;51,2017-03-29T11:37:56.265Z;52,2017-03-29T11:50:06.822Z;53,2017-03-29T11:54:37.486Z;52,2017-03-29T11:57:51.516Z;53,2017-03-29T11:57:59.383Z;54,2017-03-29T11:58:06.950Z;55,2017-03-29T11:58:17.016Z;54,2017-03-29T11:59:50.315Z";

var partialDayOfData = "1,2017-03-29T12:03:05.679Z;2,2017-03-29T12:04:49.011Z;1,2017-03-29T12:07:48.509Z;0,2017-03-29T12:07:49.610Z;1,2017-03-29T12:11:41.973Z;2,2017-03-29T12:15:20.570Z;1,2017-03-29T12:19:23.601Z;2,2017-03-29T12:20:02.534Z;3,2017-03-29T12:20:03.674Z;4,2017-03-29T12:23:02.165Z;5,2017-03-29T12:23:04.632Z;6,2017-03-29T12:27:42.895Z;7,2017-03-29T12:30:38.692Z;8,2017-03-29T12:32:52.591Z;9,2017-03-29T12:33:00.358Z;10,2017-03-29T12:34:33.356Z;11,2017-03-29T12:35:54.323Z;10,2017-03-29T12:42:10.151Z;9,2017-03-29T12:43:29.417Z;10,2017-03-29T12:45:45.415Z;11,2017-03-29T12:47:00.481Z;10,2017-03-29T12:49:23.646Z;11,2017-03-29T12:51:16.611Z;10,2017-03-29T12:52:32.610Z;11,2017-03-29T12:53:14.910Z;12,2017-03-29T12:53:44.976Z;13,2017-03-29T12:56:00.508Z;14,2017-03-29T12:56:56.607Z;13,2017-03-29T12:59:49.838Z;12,2017-03-29T12:59:51.172Z;11,2017-03-29T12:59:53.639Z;12,2017-03-29T13:02:04.770Z;11,2017-03-29T13:03:19.103Z;12,2017-03-29T13:05:20.268Z;13,2017-03-29T13:11:30.530Z;14,2017-03-29T13:11:47.396Z;15,2017-03-29T13:11:49.063Z;16,2017-03-29T13:12:35.262Z;15,2017-03-29T13:13:22.695Z;14,2017-03-29T13:13:40.761Z;13,2017-03-29T13:13:42.129Z;12,2017-03-29T13:13:45.863Z;11,2017-03-29T13:13:48.562Z;10,2017-03-29T13:14:56.327Z;11,2017-03-29T13:15:06.961Z;10,2017-03-29T13:15:44.060Z;11,2017-03-29T13:18:37.158Z;10,2017-03-29T13:20:43.457Z;11,2017-03-29T13:21:39.656Z;10,2017-03-29T13:21:46.556Z;9,2017-03-29T13:23:25.421Z;10,2017-03-29T13:23:26.856Z;11,2017-03-29T13:25:12.787Z;10,2017-03-29T13:25:24.787Z;11,2017-03-29T13:25:45.086Z;12,2017-03-29T13:25:54.520Z;11,2017-03-29T13:26:04.419Z;12,2017-03-29T13:27:00.219Z;13,2017-03-29T13:27:19.218Z;14,2017-03-29T13:27:45.985Z;13,2017-03-29T13:28:14.551Z;12,2017-03-29T13:28:15.351Z;13,2017-03-29T13:28:47.151Z;14,2017-03-29T13:30:40.783Z;13,2017-03-29T13:30:56.282Z;14,2017-03-29T13:31:43.182Z;15,2017-03-29T13:31:44.182Z;16,2017-03-29T13:31:44.349Z;15,2017-03-29T13:31:54.650Z;14,2017-03-29T13:31:57.017Z;13,2017-03-29T13:33:32.247Z;14,2017-03-29T13:35:13.713Z;15,2017-03-29T13:37:07.045Z;16,2017-03-29T13:37:07.878Z;15,2017-03-29T13:38:34.612Z;14,2017-03-29T13:40:16.942Z;13,2017-03-29T13:40:18.677Z;14,2017-03-29T13:45:10.539Z;15,2017-03-29T13:45:12.573Z;14,2017-03-29T13:46:04.338Z;13,2017-03-29T13:47:24.937Z;12,2017-03-29T13:47:30.872Z;13,2017-03-29T13:47:33.504Z;14,2017-03-29T13:47:58.470Z;15,2017-03-29T13:48:53.070Z;16,2017-03-29T13:49:45.502Z;15,2017-03-29T13:51:11.835Z;16,2017-03-29T13:51:39.934Z;17,2017-03-29T13:52:14.034Z;18,2017-03-29T13:52:16.368Z;19,2017-03-29T13:52:59.533Z;20,2017-03-29T13:53:00.868Z;19,2017-03-29T13:53:21.033Z;18,2017-03-29T13:54:39.732Z;19,2017-03-29T13:56:29.231Z;18,2017-03-29T13:58:24.996Z;19,2017-03-29T14:01:21.327Z;20,2017-03-29T14:02:45.393Z;21,2017-03-29T14:08:58.255Z";

var dayOfDataWithNegatives = "1,2017-03-23T13:36:51.493Z;0,2017-03-23T13:37:56.726Z;1,2017-03-23T14:18:30.365Z;0,2017-03-23T14:34:58.622Z;1,2017-03-23T14:39:07.358Z;2,2017-03-23T14:39:08.692Z;1,2017-03-23T14:39:36.028Z;0,2017-03-23T14:39:37.362Z;1,2017-03-23T15:09:26.273Z;2,2017-03-23T15:17:07.499Z;3,2017-03-23T15:17:21.499Z;2,2017-03-23T15:19:16.296Z;3,2017-03-23T15:19:55.895Z;2,2017-03-23T15:20:03.162Z;1,2017-03-23T15:20:20.428Z;2,2017-03-23T15:23:52.190Z;3,2017-03-23T15:25:21.588Z;2,2017-03-23T15:30:31.360Z;1,2017-03-23T15:30:34.193Z;0,2017-03-23T15:30:40.560Z;1,2017-03-23T15:31:58.024Z;2,2017-03-23T15:31:58.891Z;3,2017-03-23T15:32:00.091Z;4,2017-03-23T15:33:17.689Z;5,2017-03-23T15:35:27.886Z;4,2017-03-23T15:37:15.351Z;5,2017-03-23T15:40:54.646Z;6,2017-03-23T15:44:12.055Z;5,2017-03-23T15:46:14.586Z;4,2017-03-23T15:46:16.520Z;5,2017-03-23T15:46:41.569Z;4,2017-03-23T15:49:31.549Z;5,2017-03-23T15:51:27.912Z;6,2017-03-23T15:51:29.147Z;7,2017-03-23T15:59:17.605Z;6,2017-03-23T16:00:41.679Z;5,2017-03-23T16:10:44.599Z;6,2017-03-23T16:10:47.233Z;5,2017-03-23T16:11:48.365Z;4,2017-03-23T16:12:36.797Z;5,2017-03-23T16:23:26.095Z;4,2017-03-23T16:24:07.761Z;3,2017-03-23T16:24:24.128Z;4,2017-03-23T16:25:08.393Z;5,2017-03-23T16:25:26.893Z;6,2017-03-23T16:25:27.726Z;5,2017-03-23T16:26:52.657Z;4,2017-03-23T16:26:53.558Z;3,2017-03-23T16:26:55.091Z;2,2017-03-23T16:27:27.890Z;3,2017-03-23T16:27:51.523Z;4,2017-03-23T16:30:13.153Z;3,2017-03-23T16:30:58.941Z;4,2017-03-23T16:31:40.818Z;5,2017-03-23T16:34:02.248Z;6,2017-03-23T16:34:14.615Z;5,2017-03-23T16:42:07.084Z;6,2017-03-23T16:43:45.949Z;5,2017-03-23T16:43:48.716Z;4,2017-03-23T16:44:17.382Z;5,2017-03-23T16:49:28.508Z;4,2017-03-23T16:49:58.151Z;5,2017-03-23T16:51:04.539Z;4,2017-03-23T16:51:23.472Z;5,2017-03-23T16:59:36.170Z;4,2017-03-23T17:00:11.103Z;3,2017-03-23T17:00:11.170Z;2,2017-03-23T17:00:14.343Z;3,2017-03-23T17:11:09.436Z;4,2017-03-23T17:13:42.533Z;5,2017-03-23T17:13:44.134Z;4,2017-03-23T17:14:14.766Z;5,2017-03-23T17:14:52.466Z;4,2017-03-23T17:15:05.765Z;5,2017-03-23T17:16:48.421Z;6,2017-03-23T17:16:49.988Z;7,2017-03-23T17:17:03.229Z;6,2017-03-23T17:21:56.089Z;5,2017-03-23T17:23:09.788Z;4,2017-03-23T17:26:18.280Z;5,2017-03-23T17:29:06.042Z;6,2017-03-23T17:30:44.444Z;5,2017-03-23T17:30:47.111Z;4,2017-03-23T17:34:16.785Z;3,2017-03-23T17:39:24.079Z;4,2017-03-23T17:40:10.222Z;3,2017-03-23T17:41:32.157Z;4,2017-03-23T17:43:55.385Z;5,2017-03-23T17:46:07.249Z;4,2017-03-23T17:50:35.577Z;5,2017-03-23T17:53:40.889Z;6,2017-03-23T17:53:59.640Z;5,2017-03-23T17:55:47.824Z;4,2017-03-23T17:57:14.935Z;3,2017-03-23T17:57:57.725Z;4,2017-03-23T18:02:12.373Z;5,2017-03-23T18:07:52.066Z;6,2017-03-23T18:14:32.856Z;7,2017-03-23T18:22:49.364Z;6,2017-03-23T18:23:09.665Z;5,2017-03-23T18:27:04.952Z;6,2017-03-23T18:28:49.283Z;7,2017-03-23T18:31:47.113Z;8,2017-03-23T18:34:10.218Z;7,2017-03-23T18:36:04.587Z;6,2017-03-23T18:36:06.587Z;5,2017-03-23T18:40:17.382Z;6,2017-03-23T18:43:38.294Z;5,2017-03-23T18:53:59.709Z;6,2017-03-23T18:56:29.472Z;5,2017-03-23T18:56:52.569Z;4,2017-03-23T18:58:01.070Z;5,2017-03-23T19:03:20.803Z;4,2017-03-23T19:03:37.962Z;3,2017-03-23T19:06:36.792Z;2,2017-03-23T19:06:37.593Z;1,2017-03-23T19:14:39.361Z;2,2017-03-23T19:16:40.492Z;1,2017-03-23T19:16:50.525Z;2,2017-03-23T19:20:47.486Z;3,2017-03-23T19:20:49.987Z;4,2017-03-23T19:20:51.587Z;5,2017-03-23T19:20:53.320Z;4,2017-03-23T19:21:12.719Z;3,2017-03-23T19:21:16.652Z;2,2017-03-23T19:21:18.986Z;1,2017-03-23T19:21:21.086Z;2,2017-03-23T19:40:45.740Z;1,2017-03-23T19:40:59.107Z;2,2017-03-23T19:45:26.579Z;1,2017-03-23T19:47:17.143Z;2,2017-03-23T19:56:11.297Z;1,2017-03-23T19:56:27.964Z;0,2017-03-23T19:57:04.377Z;1,2017-03-23T20:08:14.860Z;2,2017-03-23T20:08:44.026Z;3,2017-03-23T20:09:49.425Z;4,2017-03-23T20:09:50.558Z;3,2017-03-23T20:13:04.987Z;4,2017-03-23T20:17:00.761Z;3,2017-03-23T20:19:00.192Z;2,2017-03-23T20:19:02.026Z;1,2017-03-23T20:19:03.027Z;0,2017-03-23T20:24:50.984Z;1,2017-03-23T20:44:46.470Z;0,2017-03-23T20:45:07.295Z;1,2017-03-23T20:51:49.541Z;2,2017-03-23T20:52:38.806Z;3,2017-03-23T20:57:27.433Z;4,2017-03-23T20:59:40.199Z;5,2017-03-23T21:05:48.422Z;6,2017-03-23T21:09:07.563Z;7,2017-03-23T21:14:44.257Z;8,2017-03-23T21:17:43.535Z;9,2017-03-23T21:21:37.482Z;10,2017-03-23T21:21:45.015Z;9,2017-03-23T21:22:05.948Z;10,2017-03-23T21:30:13.815Z;9,2017-03-23T21:33:15.377Z;10,2017-03-23T21:34:10.843Z;11,2017-03-23T21:34:15.344Z;12,2017-03-23T21:34:16.877Z;11,2017-03-23T21:34:54.993Z;12,2017-03-23T21:35:03.626Z;11,2017-03-23T21:35:08.726Z;10,2017-03-23T21:36:07.940Z;9,2017-03-23T21:36:10.407Z;8,2017-03-23T21:37:49.238Z;7,2017-03-23T21:38:08.204Z;6,2017-03-23T21:42:34.437Z;7,2017-03-23T21:47:09.904Z;6,2017-03-23T21:50:00.368Z;7,2017-03-23T21:52:35.806Z;8,2017-03-23T21:52:36.941Z;7,2017-03-23T21:52:47.561Z;8,2017-03-23T21:54:14.606Z;9,2017-03-23T21:58:47.124Z;10,2017-03-23T21:58:49.659Z;9,2017-03-23T21:59:13.068Z;8,2017-03-23T21:59:52.397Z;7,2017-03-23T21:59:57.867Z;6,2017-03-23T21:59:57.898Z;5,2017-03-23T22:00:23.700Z;6,2017-03-23T22:00:31.999Z;5,2017-03-23T22:00:45.932Z;4,2017-03-23T22:00:46.334Z;3,2017-03-23T22:06:02.892Z;4,2017-03-23T22:13:00.016Z;3,2017-03-23T22:24:56.913Z;4,2017-03-23T22:28:05.776Z;3,2017-03-23T22:32:50.636Z;4,2017-03-23T22:33:57.213Z;5,2017-03-23T22:33:59.180Z;6,2017-03-23T22:34:00.381Z;7,2017-03-23T22:37:26.242Z;8,2017-03-23T22:37:34.076Z;7,2017-03-23T22:39:40.739Z;8,2017-03-23T22:42:32.502Z;7,2017-03-23T22:44:16.300Z;8,2017-03-23T22:49:47.893Z;7,2017-03-23T22:50:51.067Z;6,2017-03-23T22:50:51.333Z;5,2017-03-23T22:54:49.124Z;6,2017-03-23T22:55:23.861Z;7,2017-03-23T22:55:43.160Z;6,2017-03-23T22:56:47.592Z;7,2017-03-23T22:57:04.091Z;6,2017-03-23T22:57:45.258Z;7,2017-03-23T22:58:27.692Z;8,2017-03-23T23:00:11.892Z;7,2017-03-23T23:01:49.726Z;8,2017-03-23T23:05:10.182Z;7,2017-03-23T23:08:05.360Z;8,2017-03-23T23:10:54.090Z;7,2017-03-23T23:14:30.286Z;6,2017-03-23T23:14:58.485Z;5,2017-03-23T23:21:50.380Z;4,2017-03-23T23:21:57.410Z;5,2017-03-23T23:22:12.910Z;4,2017-03-23T23:22:14.211Z;3,2017-03-23T23:22:16.543Z;2,2017-03-23T23:22:25.743Z;1,2017-03-23T23:24:23.917Z;0,2017-03-23T23:26:23.031Z;1,2017-03-23T23:26:24.399Z;2,2017-03-23T23:30:33.675Z;3,2017-03-23T23:33:17.405Z;2,2017-03-23T23:35:15.670Z;1,2017-03-23T23:37:31.500Z;2,2017-03-23T23:38:29.466Z;3,2017-03-23T23:38:59.965Z;2,2017-03-23T23:39:13.132Z;1,2017-03-23T23:39:14.267Z;0,2017-03-23T23:39:16.099Z;1,2017-03-23T23:39:37.731Z;0,2017-03-23T23:39:47.231Z;1,2017-03-23T23:40:44.231Z;0,2017-03-23T23:48:41.463Z;1,2017-03-23T23:49:42.728Z;2,2017-03-23T23:54:48.322Z;1,2017-03-23T23:55:51.521Z;2,2017-03-23T23:58:29.460Z;1,2017-03-23T23:59:11.864Z;0,2017-03-23T23:59:12.897Z;-1,2017-03-23T23:59:14.332Z;0,2017-03-24T00:01:23.328Z;-1,2017-03-24T00:01:59.661Z;0,2017-03-24T00:04:15.024Z;1,2017-03-24T00:06:34.022Z;0,2017-03-24T00:09:09.519Z;-1,2017-03-24T00:11:54.749Z;0,2017-03-24T00:49:42.431Z;-1,2017-03-24T00:51:21.732Z;0,2017-03-24T01:27:14.577Z;1,2017-03-24T01:27:17.744Z;0,2017-03-24T01:31:07.441Z;-1,2017-03-24T01:31:11.941Z;-2,2017-03-24T01:31:13.007Z;-1,2017-03-24T02:43:36.926Z;-2,2017-03-24T02:45:00.925Z;-1,2017-03-24T02:48:13.924Z;0,2017-03-24T02:48:15.325Z;-1,2017-03-24T02:49:04.093Z;-2,2017-03-24T02:49:07.529Z;-1,2017-03-24T03:04:15.780Z;0,2017-03-24T03:04:17.048Z;1,2017-03-24T03:04:19.081Z;0,2017-03-24T03:04:56.807Z;-1,2017-03-24T03:04:57.943Z;-2,2017-03-24T03:04:59.508Z;-1,2017-03-24T05:58:59.183Z;-2,2017-03-24T06:01:02.847Z;-1,2017-03-24T06:03:20.511Z;-2,2017-03-24T06:03:32.278Z;-1,2017-03-24T08:48:24.182Z;-2,2017-03-24T08:48:26.916Z;-3,2017-03-24T08:54:37.768Z;-2,2017-03-24T08:56:23.539Z;-3,2017-03-24T08:56:50.101Z;-2,2017-03-24T09:09:38.389Z;-3,2017-03-24T09:11:21.932Z;-2,2017-03-24T09:33:23.383Z;-3,2017-03-24T09:35:30.508Z";

