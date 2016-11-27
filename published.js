import moment from 'moment';
import optionsResolver from './functions/option-resolver';

module.exports = function (options) {

    const opt = optionsResolver(options);

    if(opt['date_start'] === '') {
        return false;
    }

    const start = moment(opt['date_start'], 'DD/MM/YYYY');
    const end = moment(opt['date_end'], 'DD/MM/YYYY');
    const today = moment();

    if(start.isAfter(today) || end.isBefore(today)) {
        return false;
    }
    return true;
}