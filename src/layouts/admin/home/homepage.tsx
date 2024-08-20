import BackImage from '@/asset/image/text.png'
import '@/layouts/style/admin/admin.scss'
import { Button, Col, Input, InputRef, Row, Select, Statistic } from 'antd'
import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const { Option } = Select;
const handleSearch = () => {
    // 在这里处理搜索逻辑
};
const HomePageAdmin = (() => {
    const chartRef = useRef(null);
    const chartuserRef = useRef(null)
    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            const option = {
                title: {
                    text: "问卷创建数量",
                },
                tooltip: {},
                legend: {
                    data: ["问卷数"],
                },
                xAxis: {
                    data: ["12", "1", "2", "3", "4", "5"],
                },
                yAxis: {},
                series: [
                    {
                        name: "问卷数量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            };
            chart.setOption(option);
        }
        if (chartuserRef.current) {
            const userchart = echarts.init(chartuserRef.current);
            const currentOption = {
                title: {
                    text: "目前使用人员分布",
                    subtext: "数据展示",
                    left: "center",
                },
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                },
                series: [
                    {
                        name: "性别分布",
                        type: "pie",
                        radius: "50%",
                        data: [
                            { value: 60, name: "女" },
                            { value: 90, name: "男" },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                    },
                ],
            };
            userchart.setOption(currentOption);
        }
    }, []);
    const options = [
        {
            value: "Option1",
            label: "Option1",
        },
        {
            value: "Option2",
            label: "Option2",
            disabled: true,
        },
        {
            value: "Option3",
            label: "Option3",
        },
        {
            value: "Option4",
            label: "Option4",
        },
        {
            value: "Option5",
            label: "Option5",
        },
    ];
    // const [input, setInput] = useState('');
    const inputRef = useRef<InputRef>(null);
    return (
        <div>

            <div className="memberManage">
                <div className="statistic">
                    <Row gutter={10}>
                        <Col span={6}>
                            <div className="statistic-card">
                                <div className="icon">
                                    <i className="iconfont icon-zongshu"></i>
                                </div>
                                <div className="main">
                                    <Statistic value={98500}></Statistic>
                                    <div className="statistic-footer">
                                        <div className="footer-item">
                                            <span>使用人员总数</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="statistic-card">
                                <div className="icon">
                                    <i className="iconfont icon-dangqian"></i>
                                </div>
                                <div className="main">
                                    <Statistic value={98500}></Statistic>
                                    <div className="statistic-footer">
                                        <div className="footer-item">
                                            <span>创建问卷数量</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="statistic-card">
                                <div className="icon">
                                    <i className="iconfont icon-qingjia"></i>
                                </div>
                                <div className="main">
                                    <Statistic value={98500}></Statistic>
                                    <div className="statistic-footer">
                                        <div className="footer-item">
                                            <span>在线人员数量</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="statistic-card">
                                <div className="icon">
                                    <i className="iconfont icon-taotaishuliang"></i>
                                </div>
                                <div className="mainIt">
                                    <Statistic value={98500}></Statistic>
                                    <div className="statistic-footer">
                                        <div className="footer-item">
                                            <span>淘汰成员人数</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='tableShow'>
                    <div ref={chartRef} style={{ width: "50%", height: 400 }} />
                    <div ref={chartuserRef} style={{ width: "50%", height: 400 }} />
                </div>
            </div>
        </div>
    )
})
export default HomePageAdmin