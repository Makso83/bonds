import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const localeParams = { style: 'currency', currency: 'RUB' };

export default ({ bond, index }) => (
        <tr>
            <td>{index + 1}</td>
            <td>
                <p><b>{bond.title}</b></p>
                <small>{bond.key}</small>
            </td>
            <td>{bond.price}</td>
            <td>{bond.nkd.toLocaleString('ru-RU', localeParams)}</td>
            <td>{bond.fullPrice.toLocaleString('ru-RU', localeParams)}</td>
            <td>{bond.couponValue.toLocaleString('ru-RU', localeParams)}</td>
            <td>{(bond.couponValue * 0.87).toLocaleString('ru-RU', localeParams)}</td>
            <td>{format(bond.nextCoupon, 'dd.MM.yy')}</td>
            <td>{bond.couponInterval}</td>
            <td>{bond.couponsLeft}</td>
            <td>{bond.profit.toLocaleString('ru-RU', localeParams)}</td>
            <td class="text-primary"><b>{`${(bond.yearProfit * 100).toFixed(2)}%`}</b></td>
            <td>{formatDistanceToNow(bond.matDate, { locale: ruLocale })}</td>
            <td>{format(bond.matDate, 'dd.MM.yy')}</td>
        </tr>
);
