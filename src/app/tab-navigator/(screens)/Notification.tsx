import React from 'react';

import {svg} from '../../../svg';
import {components} from '../../../components';

const notifications = [
  {
    id: 1,
    title: 'Your loan application has been approved!',
    date: 'Apr 12, 2023 at 12:47 PM',
    icon: <svg.NotificationCheckSvg />,
  },
  {
    id: 2,
    title: 'The loan repayment period expires!',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'Apr 12, 2023 at 12:47 PM',
    icon: <svg.AlertSvg />,
  },
  {
    id: 3,
    title: 'Your loan application was rejected!',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    date: 'Apr 12, 2023 at 12:47 PM',
    icon: <svg.RejectedSvg />,
  },
  {
    id: 4,
    title: 'Your piggy bank is full!',
    date: 'Apr 12, 2023 at 12:47 PM',
    icon: <svg.NotificationCheckSvg />,
  },
];

export const Notification: React.FC = () => {
  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '4%', paddingBottom: '4%'}}
      >
        <h2 style={{marginBottom: 20}}>Notifications</h2>
        <ul>
          {notifications.map((notification, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <li
                key={index}
                style={{
                  padding: 20,
                  borderRadius: 10,
                  border: '1px solid #FFEFE6',
                  marginBottom: isLast ? 0 : 10,
                  backgroundColor: 'var(--white-color)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 8,
                  }}
                >
                  <div>{notification.icon}</div>
                  <h5 className='number-of-lines-1'>{notification.title}</h5>
                </div>
                {notification.description && (
                  <span
                    className='t16'
                    style={{marginTop: 14}}
                  >
                    {notification.description}
                  </span>
                )}
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--text-color)',
                    lineHeight: 1.6,
                    marginTop: 14,
                  }}
                >
                  {notification.date}
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    );
  };

  return <components.Screen>{renderContent()}</components.Screen>;
};
