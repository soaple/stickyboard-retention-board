// src/RetentionBoard.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import moment from 'moment';
const Wrapper = styled.div``;
const getDateByWeek = (year, month, date, week) => {
    let weekBefore = moment(`${year}-${month}-${date}`)
        .add(-((week - 1) * 7 + 1), 'day')
        .format('YYYY/MM/DD');
    let weekAfter = moment(`${year}-${month}-${date}`)
        .add(-(week * 7), 'day')
        .format('YYYY/MM/DD');
    return `${weekAfter}~${weekBefore}`;
};

class RetentionBoard extends React.Component {
    constructor(props) {
        super(props);
        let today = new Date();
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1; // 월
        let date = today.getDate(); // 날짜
        let day = today.getDay(); // 요일
        this.state = {
            series: [
                {
                    name: `${getDateByWeek(year, month, date, 1)}`,
                    data: [
                        {
                            x: 'week0',
                            y: 100,
                        },
                        {
                            x: 'week1',
                            // y: 29,
                        },
                        {
                            x: 'week2',
                            // y: 13,
                        },
                        {
                            x: 'week3',
                            // y: 32,
                        },
                    ],
                },
                {
                    name: `${getDateByWeek(year, month, date, 2)}`,
                    data: [
                        {
                            x: 'week0',
                            y: 100,
                        },
                        {
                            x: 'week1',
                            y: 29,
                        },
                        {
                            x: 'week2',
                            // y: 13,
                        },
                        {
                            x: 'week3',
                            // y: 32,
                        },
                    ],
                },
                {
                    name: `${getDateByWeek(year, month, date, 3)}`,
                    data: [
                        {
                            x: 'week0',
                            y: 100,
                        },
                        {
                            x: 'week1',
                            y: 35,
                        },
                        {
                            x: 'week2',
                            y: 13,
                        },
                        {
                            x: 'week3',
                            // y: 32,
                        },
                    ],
                },
                {
                    name: `${getDateByWeek(year, month, date, 4)}`,
                    data: [
                        {
                            x: 'week0',
                            y: 100,
                        },
                        {
                            x: 'week1',
                            y: 57,
                        },
                        {
                            x: 'week2',
                            y: 24,
                        },
                        {
                            x: 'week3',
                            y: 13,
                        },
                    ],
                },
            ],
            options: {
                chart: {
                    // height: 350,
                    type: 'heatmap',
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ['#008FFB'],
                // title: {
                //     text: 'HeatMap Chart (Single color)',
                // },
            },
        };
    }

    render() {
        return (
            <Wrapper>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="heatmap"
                    // height={350}
                />
            </Wrapper>
        );
    }
}

RetentionBoard.propTypes = {};

export default RetentionBoard;
