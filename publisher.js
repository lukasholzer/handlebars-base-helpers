import moment from 'moment';

module.exports = ((dateFrom, dateTo) => {
    const dFrom = (dateFrom)? moment(dateFrom, 'DD/MM/YYYY'): moment();
    const dTo = (dateTo)? moment(dateTo, 'DD/MM/YYYY'): moment();
    const today = moment() // for testing use moment('20/11/2016', 'DD/MM/YYYY')

    if(!dFrom) {
        return false;
    }

    if(dFrom.isAfter(today, 'day') || dFrom.isSame(today, 'day')) {
        if(dTo.isBefore(today, 'day') || dTo.isSame(today, 'day')) {
            return true;
        }
    }

    return false;
});
