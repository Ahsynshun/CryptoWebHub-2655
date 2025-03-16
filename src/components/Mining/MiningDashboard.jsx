import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { FaMicrochip, FaCloud, FaRobot } from 'react-icons/fa';

const MiningDashboard = () => {
  const hashRateOptions = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      areaStyle: {},
    }],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <div className="p-6 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Mining Dashboard</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            icon={<FaMicrochip />}
            title="Hash Rate"
            value="234.5 MH/s"
          />
          <StatsCard
            icon={<FaCloud />}
            title="Cloud Mining Power"
            value="1.2 GH/s"
          />
          <StatsCard
            icon={<FaRobot />}
            title="AI Optimization"
            value="Active"
          />
        </div>

        <div className="bg-dark-light rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Mining Performance</h3>
          <ReactECharts option={hashRateOptions} />
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-dark-light p-6 rounded-xl"
  >
    <div className="flex items-center space-x-4">
      <div className="text-primary text-2xl">{icon}</div>
      <div>
        <h3 className="text-gray-400">{title}</h3>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  </motion.div>
);

export default MiningDashboard;