import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';
import constants from '../commons/constants';
const LINE_COLOR = '#D8D8D8';
const TIME_LABEL_COLOR = '#AAAAAA';
const EVENT_TEXT_COLOR = '#615B73';
const NOW_INDICATOR_COLOR = 'red';
const UNAVAILABLE_HOURS_BLOCK_COLOR = '#F8F9FA';
export default function styleConstructor(theme = {}, calendarHeight) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        container: {
            backgroundColor: appStyle.calendarBackground,
            ...appStyle.timelineContainer,
        },
        contentStyle: {
            backgroundColor: appStyle.calendarBackground,
            ...appStyle.contentStyle,
            flexDirection: 'row',
            height: calendarHeight + 10
        },
        line: {
            ...theme.line,
            position: 'absolute'
        },
        gradientBorder: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: 2,
          },
        verticalLine: {
            width: 1,
            backgroundColor: LINE_COLOR,
            ...appStyle.verticalLine,
            position: 'absolute',
            height: '105%'
        },
        nowIndicator: {
          position: 'absolute',
          right: 0
        },
        nowIndicatorLine: {
          height: 1,
          backgroundColor: NOW_INDICATOR_COLOR,
          ...appStyle.nowIndicatorLine,
          position: 'absolute',
          left: -50,
          right: 0
        },
        connectingLine: {
            position: 'absolute',
            left: 0,
            width: 1,
            top: 3,
            bottom: 0,
            backgroundColor: 'pink',
          },
        nowIndicatorDot: {
            height:8,
            width:8,
            backgroundColor: '#FB2EC7',
            borderRadius:4,
            top:-3,
            right:50,
        },
        nowIndicatorKnob: {
          width: 60,
          height: 30,
          borderRadius: 15,
          backgroundColor: '#FB2EC7',
          ...appStyle.nowIndicatorKnob,
          position: 'absolute',
          left: -10,
          top: -15,
          justifyContent: 'center',
          alignItems: 'center'
        },
        nowIndicatorTime: {
          color: '#F3F5F7',
          fontSize: 16,
          fontWeight: 'bold'
        },
        timeLabel: {
            color: TIME_LABEL_COLOR,
            fontSize: 10,
            fontWeight: '500',
            fontFamily: constants.isIOS ? 'Helvetica Neue' : 'Roboto',
            paddingLeft: 12,
            textAlign: 'center',
            ...appStyle.timeLabel,
            position: 'absolute'
        },
        unavailableHoursBlock: {
            position: 'absolute',
            right: 0,
            backgroundColor: UNAVAILABLE_HOURS_BLOCK_COLOR
        },
        event: {
            opacity: 1,
            paddingLeft: 4,
            paddingTop: 5,
            paddingBottom: 0,
            backgroundColor: '#F0F4FF',
            borderColor: '#DDE5FD',
            borderWidth: 1,
            ...appStyle.event,
            position: 'absolute',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            overflow: 'hidden',
            minHeight: 25,
        },
        eventTitle: {
            color: EVENT_TEXT_COLOR,
            fontWeight: '600',
            ...appStyle.eventTitle,
            minHeight: 15
        },
        eventSummary: {
            color: EVENT_TEXT_COLOR,
            fontSize: 12,
            ...appStyle.eventSummary,
            flexWrap: 'wrap'
        },
        eventTimes: {
            marginTop: 3,
            color: EVENT_TEXT_COLOR,
            fontSize: 10,
            fontWeight: 'bold',
            ...appStyle.eventTimes,
            flexWrap: 'wrap'
        },
        eventsContainer: {
            flex: 1
        }
    });
}
