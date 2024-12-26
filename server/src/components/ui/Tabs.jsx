// src/components/ui/Tabs.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs">
            <div className="tabs__headers">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tabs__header ${index === activeTab ? 'tabs__header--active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabs__content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};

export default Tabs;