/*
 *
 * DashboardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import makeSelectGlobal from 'globalSelectors';

import Footer from 'components/Footer';
import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';
import SectionHeading from 'components/SectionHeading';

import LogoPMB from 'assets/logo.png';

import {
  fetchUserProfile,
  editUserProfile,
} from './actions';

import makeSelectDashboardPage from './selectors';

import {
  Dashboard,
} from './styled';

export class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      isEditing: false,
      name: '',
      email: '',
      phone_number: '',
      facebook: '',
      linkedin: '',
      about: '',
      birth_place: '',
      birth_date: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {
    if (this.props.Global.loggedIn) {
      this.props.fetchUserProfile(this.props.Global.user.profile_id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.Dashboard.userProfile && nextProps.Dashboard.userProfile.npm) {
      if (!this.state.isEditing && this.state.name === '') {
        this.setState({
          ...this.state,
          name: nextProps.Dashboard.userProfile.name,
          email: nextProps.Dashboard.userProfile.email,
          phone_number: nextProps.Dashboard.userProfile.phone_number,
          facebook: nextProps.Dashboard.userProfile.facebook,
          linkedin: nextProps.Dashboard.userProfile.linkedin,
          about: nextProps.Dashboard.userProfile.about,
          birth_place: nextProps.Dashboard.userProfile.birth_place,
          birth_date: nextProps.Dashboard.userProfile.birth_date,
        })
      } else if (this.state.isEditing) {
        if (
          this.state.name === nextProps.Dashboard.userProfile.name &&
          this.state.email === nextProps.Dashboard.userProfile.email &&
          this.state.phone_number === nextProps.Dashboard.userProfile.phone_number &&
          this.state.facebook === nextProps.Dashboard.userProfile.facebook &&
          this.state.linkedin === nextProps.Dashboard.userProfile.linkedin &&
          this.state.about === nextProps.Dashboard.userProfile.about &&
          this.state.birth_place === nextProps.Dashboard.userProfile.birth_place &&
          this.state.birth_date === nextProps.Dashboard.userProfile.birth_date
        ) {
          this.setState({
            isEditing: false,
            name: nextProps.Dashboard.userProfile.name,
            email: nextProps.Dashboard.userProfile.email,
            phone_number: nextProps.Dashboard.userProfile.phone_number,
            facebook: nextProps.Dashboard.userProfile.facebook,
            linkedin: nextProps.Dashboard.userProfile.linkedin,
            about: nextProps.Dashboard.userProfile.about,
            birth_place: nextProps.Dashboard.userProfile.birth_place,
            birth_date: nextProps.Dashboard.userProfile.birth_date,
          })
        }
      }
    }
  }

  onChange(value, field) {
    const newState = { ...this.state };

    newState[field] = value;

    this.setState(newState);
  }

  onSubmit() {
    const submittedValue = { ...this.props.Dashboard.userProfile, ...this.state };

    submittedValue.angkatan = submittedValue.angkatan.id;
    submittedValue.role = submittedValue.role.id;

    if (
      this.state.name === this.props.Dashboard.userProfile.name &&
      this.state.email === this.props.Dashboard.userProfile.email &&
      this.state.phone_number === this.props.Dashboard.userProfile.phone_number &&
      this.state.facebook === this.props.Dashboard.userProfile.facebook &&
      this.state.linkedin === this.props.Dashboard.userProfile.linkedin &&
      this.state.about === this.props.Dashboard.userProfile.about &&
      this.state.birth_place === this.props.Dashboard.userProfile.birth_place &&
      this.state.birth_date === this.props.Dashboard.userProfile.birth_date
    ) {
      this.toggleEdit();
    } else {
      this.props.editUserProfile(this.props.Global.user.profile_id, submittedValue);
    }
  }

  toggleEdit() {
    this.setState({
      ...this.state,
      isEditing: !this.state.isEditing,
    });
  }

  processUrl(url) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }

    return `http://${url}`;
  }

  render() {
    return (
      <Dashboard>
        <Helmet
          title="Dashboard"
          meta={[
            { name: 'description', content: 'Description of DashboardPage' },
          ]}
        />
        <div className="dashboardContent">
          <div className="profile">
            <div className="profileWrapper">
              <div className="profileContent">
                {
                  // <div className="picture">
                  //   <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
                  // </div>
                }
                {
                  this.state.isEditing &&
                  <div className="data">
                    <h3><span className="icon-user" /> My Profile</h3>
                    <h1>{this.props.Dashboard.userProfile.name}</h1>
                    <div className="importants">
                      <div className="inputPack">
                        <span className="icon-email" />
                        <input
                          type="text"
                          value={this.state.email}
                          placeholder="e-mail"
                          onChange={(evt) => this.onChange(evt.target.value, 'email')}
                          />
                      </div>
                      <div className="inputPack">
                        <span className="icon-phone" />
                        <input
                          type="number"
                          value={this.state.phone_number}
                          placeholder="Phone Number"
                          onChange={(evt) => this.onChange(evt.target.value, 'phone_number')}
                          />
                      </div>
                      <div className="inputPack">
                        <span className="icon-facebook" />
                        <input
                          type="text"
                          value={this.state.facebook}
                          placeholder="Facebook profile"
                          onChange={(evt) => this.onChange(evt.target.value, 'facebook')}
                          />
                      </div>
                      <div className="inputPack">
                        <span className="icon-linkedin" />
                        <input
                          type="text"
                          value={this.state.linkedin}
                          placeholder="Linkedin profile"
                          onChange={(evt) => this.onChange(evt.target.value, 'linkedin')}
                          />
                      </div>
                    </div>
                    <h2>
                      Born in
                      <input
                        type="text"
                        value={this.state.birth_place}
                        placeholder="City"
                        onChange={(evt) => this.onChange(evt.target.value, 'birth_place')}
                        />
                      On
                      <input
                        type="text"
                        value={this.state.birth_date}
                        placeholder="Date (YYYY-MM-DD)"
                        onChange={(evt) => this.onChange(evt.target.value, 'birth_date')}
                        />
                    </h2>
                    <h2>About you</h2>
                    <textarea
                      value={this.state.about}
                      placeholder="A little bit about yourself"
                      onChange={(evt) => this.onChange(evt.target.value, 'about')}
                      />
                    <button onClick={this.onSubmit} className="save"><span className="icon-send" />Save</button>
                    <button onClick={this.toggleEdit}><span className="icon-close" /> Cancel</button>
                  </div>
                }
                {
                  !this.state.isEditing &&
                  <div className="data">
                    <h3><span className="icon-user" /> My Profile</h3>
                    <h1>{this.props.Dashboard.userProfile.name}</h1>
                    <div className="importants">
                      <span><span className="icon-email" />{this.props.Dashboard.userProfile.email}</span>
                      {
                        this.props.Dashboard.userProfile.phone_number &&
                        <span>·</span>
                      }
                      {
                        this.props.Dashboard.userProfile.phone_number &&
                        <span><span className="icon-phone" />{this.props.Dashboard.userProfile.phone_number}</span>
                      }
                      {
                        this.props.Dashboard.userProfile.facebook &&
                        <span>·</span>
                      }
                      {
                        this.props.Dashboard.userProfile.facebook &&
                        <a href={this.processUrl(this.props.Dashboard.userProfile.facebook)} target="_blank">
                          <span className="icon-facebook" />
                        </a>
                      }
                      {
                        this.props.Dashboard.userProfile.linkedin &&
                        <span>·</span>
                      }
                      {
                        this.props.Dashboard.userProfile.linkedin &&
                        <a href={this.processUrl(this.props.Dashboard.userProfile.linkedin)} target="_blank">
                          <span className="icon-linkedin" />
                        </a>
                      }
                    </div>
                    {
                      this.props.Dashboard.userProfile.birth_place && this.props.Dashboard.userProfile.birth_date &&
                      <h2>Born in {this.props.Dashboard.userProfile.birth_place}, {this.props.Dashboard.userProfile.birth_date}</h2>
                    }
                    {
                      this.props.Dashboard.userProfile.about &&
                      <p>{this.props.Dashboard.userProfile.about}</p>
                    }
                    <button onClick={this.toggleEdit} className="edit"><span className="icon-user-edit" /> Edit</button>
                  </div>
                }
              </div>
              <div className="footer">
                <Footer />
              </div>
            </div>
          </div>
          {
            // <SectionHeading>
            //   <h1>My Statistic</h1>
            // </SectionHeading>
            // <Card>
            //   <div className="stats">
            //     <div className="progress">
            //       <ProgressBar title="Task" current={13} max={24} />
            //     </div>
            //     <div className="progress">
            //       <ProgressBar className="progress" title="Attendance" current={13} max={15} />
            //     </div>
            //     <div className="progress">
            //       <ProgressBar className="progress" title="Omega Target" current={15} max={150} />
            //     </div>
            //     <div className="progress">
            //       <ProgressBar className="progress" title="Capung Target" current={24} max={100} />
            //     </div>
            //     <div className="progress">
            //       <ProgressBar className="progress" title="Orion Target" current={48} max={50} />
            //     </div>
            //     <div className="progress">
            //       <ProgressBar className="progress" title="Angklung Target" current={15} max={25} />
            //     </div>
            //     <div className="progress">
            //       <ProgressBar className="progress" title="Astro ++ Target" current={4} max={10} />
            //     </div>
            //   </div>
            // </Card>
            // <SectionHeading>
            //   <h1>My Friends (65)</h1>
            // </SectionHeading>
            // <Card>
            //   <div className="friends">
            //     <div className="searchModule">
            //       <input type="text" placeholder="Type any name" />
            //     </div>
            //     <div className="friendList">
            //       <div className="friendItem">
            //         <div className="picture">
            //           <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
            //         </div>
            //         <div className="data">
            //           <h1>Wuriandita Namapanjang Sekali</h1>
            //           <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
            //           <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
            //         </div>
            //       </div>
            //       <div className="friendItem">
            //         <div className="picture">
            //           <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
            //         </div>
            //         <div className="data">
            //           <h1>Wuriandita Namapanjang Sekali</h1>
            //           <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
            //           <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
            //         </div>
            //       </div>
            //       <div className="friendItem">
            //         <div className="picture">
            //           <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
            //         </div>
            //         <div className="data">
            //           <h1>Wuriandita Namapanjang Sekali</h1>
            //           <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
            //           <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
            //         </div>
            //       </div>
            //       <div className="friendItem">
            //         <div className="picture">
            //           <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
            //         </div>
            //         <div className="data">
            //           <h1>Wuriandita Namapanjang Sekali</h1>
            //           <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
            //           <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
            //         </div>
            //       </div>
            //       <div className="friendItem">
            //         <div className="picture">
            //           <img src="https://i1.wp.com/a.slack-edge.com/7fa9/img/avatars/ava_0000-512.png?ssl=1" alt="Ava" />
            //         </div>
            //         <div className="data">
            //           <h1>Wuriandita Namapanjang Sekali</h1>
            //           <h2>wurie.namapanjang@gmail.com · 085728333045 · wurie.namapanjang</h2>
            //           <p>Et accumsan orci quam suspendisse ad eros quam nec in neque scelerisque duis himenaeos quisque odio a arcu.A tristique senectus volutpat a etiam egestas quisque vestibulum fermentum nibh sociis dui mus convallis a a suspendisse facilisis a porta at nulla.Parturient morbi est sodales consequat massa vestibulum nam condimentum.</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </Card>
          }
        </div>
      </Dashboard>
    );
  }
}

DashboardPage.propTypes = {
  fetchUserProfile: PropTypes.func.isRequired,
  editUserProfile: PropTypes.func.isRequired,
  Dashboard: PropTypes.object,
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboardPage(),
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUserProfile: (id) => dispatch(fetchUserProfile(id)),
    editUserProfile: (id, data) => dispatch(editUserProfile(id, data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
