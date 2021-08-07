import moment from "moment";

const TimeTodayDate = (date: Date) => {
    moment.locale('en', {
        'calendar': {
            'lastDay': 'D MMMM',
            'sameDay': 'h:mmA',
            'nextDay': 'D MMMM',
            'lastWeek': 'D MMMM',
            'nextWeek': 'D MMMM',
            'sameElse': 'D MMMM'
        }
    });
    return moment(date).calendar();
}

export default TimeTodayDate