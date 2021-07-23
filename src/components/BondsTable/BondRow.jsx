import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const localeParams = { style: 'currency', currency: 'RUB' };

const formattedValue = (value) => value.toLocaleString('ru-RU', localeParams);

export default ({ bond, index }) => (
        <tr>
            <td>{index + 1}</td>
            <td>
                <p><b>{bond.title}</b></p>
                <small>{bond.key}</small>
            </td>
            <td>{bond.price}</td>
            <td>{formattedValue(bond.nkd)}</td>
            <td>{formattedValue(bond.fullPrice)}</td>
            <td>{formattedValue(bond.couponValue)}</td>
            <td>{formattedValue(bond.couponValue * 0.87)}</td>
            <td>{format(bond.nextCoupon, 'dd.MM.yy')}</td>
            <td>{bond.couponInterval}</td>
            <td>{bond.couponsLeft}</td>
            <td>{formattedValue(bond.profit)}</td>
            <td class="text-primary"><b>{`${(bond.yearProfit * 100).toFixed(2)}%`}</b></td>
            <td>{formatDistanceToNow(bond.matDate, { locale: ruLocale })}</td>
            <td>{format(bond.matDate, 'dd.MM.yy')}</td>
            <td>{bond.duration}</td>
        </tr>
);
