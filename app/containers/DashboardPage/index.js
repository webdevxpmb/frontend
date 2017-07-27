/*
 *
 * DashboardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { createStructuredSelector } from 'reselect';

import Footer from 'components/Footer';
import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';
import SectionHeading from 'components/SectionHeading';

// import makeSelectDashboardPage from './selectors';

import {
  Dashboard,
} from './styled';

export class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Dashboard>
        <Helmet
          title="DashboardPage"
          meta={[
            { name: 'description', content: 'Description of DashboardPage' },
          ]}
        />
        <div className="dashboardContent">
          <SectionHeading>
            <h1>My Profile</h1>
          </SectionHeading>
          <Card>
            <div className="profile">
              <div className="picture">
                <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
              </div>
              <div className="data">
                <h1>Wuriandita Namapanjang Sekali</h1>
                <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
                <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
              </div>
            </div>
          </Card>
          <SectionHeading>
            <h1>My Statistic</h1>
          </SectionHeading>
          <Card>
            <div className="stats">
              <ProgressBar title="Task" current={13} max={24} />
              <ProgressBar title="Attendance" current={13} max={15} />
              <ProgressBar title="Omega Target" current={15} max={150} />
              <ProgressBar title="Capung Target" current={24} max={100} />
              <ProgressBar title="Orion Target" current={48} max={50} />
              <ProgressBar title="Angklung Target" current={15} max={25} />
              <ProgressBar title="Astro ++ Target" current={4} max={10} />
            </div>
          </Card>
          <SectionHeading>
            <h1>My Friends (65)</h1>
          </SectionHeading>
          <Card>
            <div className="friends">
              <div className="searchModule">
                <input type="text" placeholder="Type any name" />
              </div>
              <div className="friendList">
                <div className="friendItem">
                  <div className="picture">
                    <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
                  </div>
                  <div className="data">
                    <h1>Wuriandita Namapanjang Sekali</h1>
                    <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
                    <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
                  </div>
                </div>
                <div className="friendItem">
                  <div className="picture">
                    <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
                  </div>
                  <div className="data">
                    <h1>Wuriandita Namapanjang Sekali</h1>
                    <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
                    <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
                  </div>
                </div>
                <div className="friendItem">
                  <div className="picture">
                    <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
                  </div>
                  <div className="data">
                    <h1>Wuriandita Namapanjang Sekali</h1>
                    <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
                    <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
                  </div>
                </div>
                <div className="friendItem">
                  <div className="picture">
                    <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
                  </div>
                  <div className="data">
                    <h1>Wuriandita Namapanjang Sekali</h1>
                    <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
                    <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
                  </div>
                </div>
                <div className="friendItem">
                  <div className="picture">
                    <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
                  </div>
                  <div className="data">
                    <h1>Wuriandita Namapanjang Sekali</h1>
                    <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
                    <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Dashboard>
    );
  }
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   DashboardPage: makeSelectDashboardPage(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DashboardPage);
