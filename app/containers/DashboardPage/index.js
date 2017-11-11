/*
 *
 * DashboardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';

import makeSelectGlobal from 'globalSelectors';

import Footer from 'components/Footer';
import Card from 'components/Card';
// import ProgressBar from 'components/ProgressBar';
// import SectionHeading from 'components/SectionHeading';

// import LogoPMB from 'assets/logo.png';

import {
  changePage,
  fetchUserProfile,
  editUserProfile,
  fetchFriendlist,
  changeFriendStatus,
  changeDetailKenalan,
  changeSort,
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
      isFixing: -1,
      isKenalanNonSSO: false,
      fixingData: {
        phone_number: '',
        birth_place: '',
        birth_date: '',
        asal_sma: '',
        story: '',
        angkatan: '',
        name: '',
        link_photo: '',
        warning: {
          phone_number: '',
          birth_place: '',
          birth_date: '',
          asal_sma: '',
          story: '',
          name: '',
          angkatan: '',
          link_photo: '',
        },
      },
      isChangingStatus: '',
      rejectReason: '',
      changeStatusContext: {
        id: '',
        index: '',
      },
      searchQuery: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onFixingDataChange = this.onFixingDataChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onOpenResubmitForm = this.onOpenResubmitForm.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.approve = this.approve.bind(this);
    this.pending = this.pending.bind(this);
    this.reject = this.reject.bind(this);
    this.resubmitKenalan = this.resubmitKenalan.bind(this);
    this.cancelResubmitKenalan = this.cancelResubmitKenalan.bind(this);
    this.confirmChangeStatus = this.confirmChangeStatus.bind(this);
    this.cancelConfirmChangeStatus = this.cancelConfirmChangeStatus.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
    this.renderFriendlist = this.renderFriendlist.bind(this);
    this.renderResubmitForm = this.renderResubmitForm.bind(this);
    this.renderChangeStatusConfirmation = this.renderChangeStatusConfirmation.bind(this);
  }

  componentDidMount() {
    if (this.props.Global.loggedIn) {
      this.props.fetchUserProfile(this.props.Global.user.profile_id);
      this.props.fetchFriendlist();
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
        });
      } else if (this.state.isEditing && this.props.Global.currentlySending && !nextProps.Global.currentlySending) {
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
            ...this.state,
            isEditing: false,
            name: nextProps.Dashboard.userProfile.name,
            email: nextProps.Dashboard.userProfile.email,
            phone_number: nextProps.Dashboard.userProfile.phone_number,
            facebook: nextProps.Dashboard.userProfile.facebook,
            linkedin: nextProps.Dashboard.userProfile.linkedin,
            about: nextProps.Dashboard.userProfile.about,
            birth_place: nextProps.Dashboard.userProfile.birth_place,
            birth_date: nextProps.Dashboard.userProfile.birth_date,
          });
        }
      }
    }
  }

  onChange(value, field) {
    const newState = { ...this.state };

    newState[field] = value;

    this.setState(newState);
  }

  onSearch(value) {
    const newState = { ...this.state };

    newState.searchQuery = value;

    this.setState(newState);
  }

  onFixingDataChange(field, value) {
    const newState = { ...this.state };

    newState.fixingData[field] = value;

    this.setState(newState);
  }

  onSubmit() {
    const { userProfile } = this.props.Dashboard;
    const submittedValue = { ...userProfile, ...this.state };

    submittedValue.angkatan = submittedValue.angkatan.id;
    submittedValue.role = submittedValue.role.id;
    delete submittedValue.isEditing;
    delete submittedValue.isFixing;

    if (
      this.state.name === userProfile.name &&
      this.state.email === userProfile.email &&
      this.state.phone_number === userProfile.phone_number &&
      this.state.facebook === userProfile.facebook &&
      this.state.linkedin === userProfile.linkedin &&
      this.state.about === userProfile.about &&
      this.state.birth_place === userProfile.birth_place &&
      this.state.birth_date === userProfile.birth_date
    ) {
      this.toggleEdit();
    } else {
      this.props.editUserProfile(this.props.Global.user.profile_id, submittedValue);
    }
  }

  onOpenResubmitForm(index) {
    const { friendlist } = this.props.Dashboard;
    const currentDetailKenalan = friendlist[index].detail_kenalan;
    const boolKenalanNonSSO = !isEmpty(currentDetailKenalan.angkatan);
    this.setState({
      ...this.state,
      isFixing: index,
      isKenalanNonSSO: boolKenalanNonSSO,
      fixingData: {
        ...this.state.fixingData,
        phone_number: currentDetailKenalan.phone_number,
        birth_place: currentDetailKenalan.birth_place,
        birth_date: currentDetailKenalan.birth_date,
        asal_sma: currentDetailKenalan.asal_sma,
        story: currentDetailKenalan.story,
        name: currentDetailKenalan.name,
        angkatan: currentDetailKenalan.angkatan,
        link_photo: currentDetailKenalan.link_photo,
      },
    });
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

  next() {
    const max = Math.ceil(this.props.Dashboard.friendlist.length / 5);

    if (this.props.Dashboard.currentPage < max) {
      this.props.changePage(this.props.Dashboard.currentPage + 1);
    }
  }

  prev() {
    if (this.props.Dashboard.currentPage > 1) {
      this.props.changePage(this.props.Dashboard.currentPage - 1);
    }
  }

  approve(id, index) {
    this.props.changeFriendStatus(id, { status: 1 }, index);

    if (this.state.isChangingStatus) {
      this.setState({
        ...this.state,
        isChangingStatus: '',
        changeStatusContext: {
          id: '',
          index: '',
        },
      });
    }
  }

  pending(id, index) {
    this.props.changeFriendStatus(id, { status: 2 }, index);
  }

  reject(id, index) {
    this.props.changeFriendStatus(id, { status: 3, notes: this.state.rejectReason }, index);

    if (this.state.isChangingStatus) {
      this.setState({
        ...this.state,
        isChangingStatus: '',
        rejectReason: '',
        changeStatusContext: {
          id: '',
          index: '',
        },
      });
    }
  }

  resubmitKenalan() {
    const dateTimeRegex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
    const { friendlist } = this.props.Dashboard;
    const currentDetailKenalan = friendlist[this.state.isFixing].detail_kenalan;
    const currentId = friendlist[this.state.isFixing].id;

    const warning = {
      phone_number: '',
      birth_place: '',
      birth_date: '',
      asal_sma: '',
      story: '',
      name: '',
      angkatan: '',
      link_photo: '',
    };

    let isInvalid = false;

    if ((!this.state.fixingData.name || this.state.fixingData.phone_number.name < 1) && this.state.isKenalanNonSSO ) {
      warning.name = 'Name cannot be empty';
      isInvalid = true;
    }

    if (!this.state.fixingData.phone_number || this.state.fixingData.phone_number.length < 6 || isNaN(this.state.fixingData.phone_number)) {
      warning.phone_number = 'Phone Number cannot be less than 6 character and must be a number';
      isInvalid = true;
    }

    if (!this.state.fixingData.birth_place || this.state.fixingData.birth_place.length <= 0) {
      warning.birth_place = 'Birth Place cannot be empty';
      isInvalid = true;
    }

    if (!this.state.fixingData.birth_date || this.state.fixingData.birth_date.length <= 0) {
      warning.birth_date = 'Birth Date cannot be empty';
      isInvalid = true;
    } else if (!this.state.fixingData.birth_date.match(dateTimeRegex)) {
      warning.birth_date = 'Birth Date Must be in YYYY-MM-DD Format!';
      isInvalid = true;
    }

    if (!this.state.fixingData.asal_sma || this.state.fixingData.asal_sma.length <= 0) {
      warning.asal_sma = 'Highschool cannot be empty';
      isInvalid = true;
    }

    if (!this.state.fixingData.story || this.state.fixingData.story.length <= 0) {
      warning.story = 'Unique Story cannot be empty';
      isInvalid = true;
    }

    if ((!this.state.fixingData.angkatan || this.state.fixingData.angkatan < 1) && this.state.isKenalanNonSSO ) {
      warning.angkatan = 'Angkatan cannot be empty';
      isInvalid = true;
    }

    if ((!this.state.fixingData.link_photo || this.state.fixingData.link_photo < 1) && this.state.isKenalanNonSSO ) {
      warning.link_photo = 'Link Photo cannot be empty';
      isInvalid = true;
    }

    if (
      currentDetailKenalan.phone_number === this.state.fixingData.phone_number &&
      currentDetailKenalan.birth_place === this.state.fixingData.birth_place &&
      currentDetailKenalan.birth_date === this.state.fixingData.birth_date &&
      currentDetailKenalan.asal_sma === this.state.fixingData.asal_sma &&
      currentDetailKenalan.story === this.state.fixingData.story &&
      currentDetailKenalan.angkatan === this.state.fixingData.angkatan &&
      currentDetailKenalan.link_photo === this.state.fixingData.link_photo &&
      currentDetailKenalan.name === this.state.fixingData.name
    ) {
      isInvalid = true;
    }

    if (!isInvalid) {
      const fixingName = this.state.isKenalanNonSSO? this.state.fixingData.name : currentDetailKenalan.name;
      const finalData = {
        ...currentDetailKenalan,
        name: fixingName,
        phone_number: this.state.fixingData.phone_number,
        birth_place: this.state.fixingData.birth_place,
        birth_date: this.state.fixingData.birth_date,
        asal_sma: this.state.fixingData.asal_sma,
        story: this.state.fixingData.story,
        angkatan: this.state.fixingData.angkatan,
        link_photo: this.state.fixingData.link_photo,
      };

      this.props.changeDetailKenalan(currentDetailKenalan.id, finalData, currentId, { status: 2 }, this.state.isFixing);
      this.setState({
        ...this.state,
        isFixing: -1,
        fixingData: {
          phone_number: '',
          birth_place: '',
          birth_date: '',
          asal_sma: '',
          story: '',
          warning: {
            phone_number: '',
            birth_place: '',
            birth_date: '',
            asal_sma: '',
            story: '',
          },
        },
      });
    } else if (
      currentDetailKenalan.phone_number === this.state.fixingData.phone_number &&
      currentDetailKenalan.birth_place === this.state.fixingData.birth_place &&
      currentDetailKenalan.birth_date === this.state.fixingData.birth_date &&
      currentDetailKenalan.asal_sma === this.state.fixingData.asal_sma &&
      currentDetailKenalan.story === this.state.fixingData.story &&
      currentDetailKenalan.angkatan === this.state.fixingData.angkatan &&
      currentDetailKenalan.link_photo === this.state.fixingData.link_photo &&
      currentDetailKenalan.name === this.state.fixingData.name
    ) {
      this.setState({
        ...this.state,
        fixingData: {
          ...this.state.fixingData,
          warning: {
            phone_number: 'Nothing has been changed, you can only resubmit if you had fixed at least 1 data in here',
            birth_place: 'Nothing has been changed, you can only resubmit if you had fixed at least 1 data in here',
            birth_date: 'Nothing has been changed, you can only resubmit if you had fixed at least 1 data in here',
            asal_sma: 'Nothing has been changed, you can only resubmit if you had fixed at least 1 data in here',
            story: 'Nothing has been changed, you can only resubmit if you had fixed at least 1 data in here',
            name: 'Nothing has been changed, you can only resubmit if you had fixed at least 1 data in here',
            link_photo: 'Nothing has been changed, you can only resubmit if you had fixed at least 1 data in here',
            angkatan: 'Nothing has been changed, you can only resubmit if you had fixed at least 1 data in here',
          },
        },
      });
    } else {
      this.setState({
        ...this.state,
        fixingData: {
          ...this.state.fixingData,
          warning,
        },
      });
    }
  }

  cancelResubmitKenalan() {
    this.setState({
      ...this.state,
      isFixing: -1,
      fixingData: {
        ...this.state.fixingData,
        phone_number: '',
        birth_place: '',
        birth_date: '',
        asal_sma: '',
        story: '',
      },
    });
  }

  confirmChangeStatus(status, id, index) {
    this.setState({
      ...this.state,
      isChangingStatus: status,
      changeStatusContext: {
        id,
        index,
      },
    });
  }

  cancelConfirmChangeStatus() {
    this.setState({
      ...this.state,
      isChangingStatus: '',
      changeStatusContext: {
        id: '',
        index: '',
      },
    });
  }

  renderPagination() {
    const { friendlist, currentPage } = this.props.Dashboard;
    const totalPages = Math.ceil(friendlist.length / 5);

    if (this.state.searchQuery) {
      return null;
    }

    if (totalPages > 1) {
      if (totalPages > 3) {
        if (currentPage > 1 && currentPage < totalPages) {
          return (
            <div className="pagination">
              <button onClick={this.prev}><span className="icon-left" /></button>
              <button onClick={() => this.props.changePage(currentPage - 1)} className="central">{currentPage - 1}</button>
              <button onClick={() => this.props.changePage(currentPage)} className="central" disabled>{currentPage}</button>
              <button onClick={() => this.props.changePage(currentPage + 1)} className="central">{currentPage + 1}</button>
              <button onClick={this.next}><span className="icon-right" /></button>
            </div>
          );
        } else if (currentPage > 1) {
          return (
            <div className="pagination">
              <button onClick={this.prev}><span className="icon-left" /></button>
              <button onClick={() => this.props.changePage(currentPage - 2)} className="central">{currentPage - 2}</button>
              <button onClick={() => this.props.changePage(currentPage - 1)} className="central">{currentPage - 1}</button>
              <button onClick={() => this.props.changePage(currentPage)} className="central" disabled>{currentPage}</button>
              <button onClick={this.next}><span className="icon-right" /></button>
            </div>
          );
        }

        return (
          <div className="pagination">
            <button onClick={this.prev}><span className="icon-left" /></button>
            <button className="central" disabled>{currentPage}</button>
            <button onClick={() => this.props.changePage(currentPage + 1)} className="central">{currentPage + 1}</button>
            <button onClick={() => this.props.changePage(currentPage + 2)} className="central">{currentPage + 2}</button>
            <button onClick={this.next}><span className="icon-right" /></button>
          </div>
        );
      } else if (totalPages > 2) {
        return (
          <div className="pagination">
            <button onClick={this.prev}><span className="icon-left" /></button>
            <button onClick={() => this.props.changePage(1)} className="central" disabled={currentPage === 1}>1</button>
            <button onClick={() => this.props.changePage(2)} className="central" disabled={currentPage === 2}>2</button>
            <button onClick={() => this.props.changePage(3)} className="central" disabled={currentPage === 3}>3</button>
            <button onClick={this.next}><span className="icon-right" /></button>
          </div>
        );
      }

      return (
        <div className="pagination">
          <button onClick={this.prev}><span className="icon-left" /></button>
          <button onClick={() => this.props.changePage(1)} className="central" disabled={currentPage === 1}>1</button>
          <button onClick={() => this.props.changePage(2)} className="central" disabled={currentPage === 2}>2</button>
          <button onClick={this.next}><span className="icon-right" /></button>
        </div>
      );
    }

    return null;
  }

  renderFriendlist() {
    const { friendlist, currentPage } = this.props.Dashboard;
    const isMaba = !isEmpty(this.props.Global.user) ? this.props.Global.user.role === 'mahasiswa baru' : false;
    const searchQuery = this.state.searchQuery;

    if (!isEmpty(friendlist)) {
      if (searchQuery) {
        return friendlist.map((value, index) => {
          let currentUserProfile = value.user_maba.profile;

          if (isMaba && (value.user_elemen)) {
            currentUserProfile = value.user_elemen.profile;
          }

          const elemenName = value.detail_kenalan.name ? value.detail_kenalan.name : '';
          let linkPhotoRender = null;
          if (!(value.user_elemen)) {

            linkPhotoRender = (
              <a href={value.detail_kenalan.link_photo} target="_blank">
                <span className="icon-link" /> Photo
              </a>
            );

            currentUserProfile = {
              name: elemenName,
              email: '',
              phone_number: '',
              facebook: '',
              linkedin: '',
              birth_date: '',
              birth_place: '',
            };
          }

          let detailKenalanAction = null;

          if (isMaba && value.status.status === 'rejected') {
            detailKenalanAction = (
              <div className="actions">
                <button className="edit" onClick={() => this.onOpenResubmitForm(index)}><span className="icon-send" />Edit and Resubmit</button>
              </div>
            );
          }

          if (!isMaba && value.status.status === 'pending') {
            detailKenalanAction = (
              <div className="actions">
                <button className="approve" onClick={() => this.confirmChangeStatus('approve', value.id, index)}><span className="icon-checked" />Approve</button>
                <button className="reject" onClick={() => this.confirmChangeStatus('reject', value.id, index)}><span className="icon-close" />Reject</button>
              </div>
            );
          }

          if (currentUserProfile.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return (
              <div className="friendCard" key={`dashboard-friend-${index}`}>
                <Card>
                  <div className="friend">
                    <h1>{currentUserProfile.name.toLowerCase()}</h1>
                    <div className="importants">
                      <span><span className="icon-email" />{currentUserProfile.email}</span>
                      {
                        currentUserProfile.phone_number &&
                        <span>·</span>
                      }
                      {
                        currentUserProfile.phone_number &&
                        <span><span className="icon-phone" />{currentUserProfile.phone_number}</span>
                      }
                      {
                        currentUserProfile.facebook &&
                        <span>·</span>
                      }
                      {
                        currentUserProfile.facebook &&
                        <a href={this.processUrl(currentUserProfile.facebook)} target="_blank">
                          <span className="icon-facebook" />
                        </a>
                      }
                      {
                        currentUserProfile.linkedin &&
                        <span>·</span>
                      }
                      {
                        currentUserProfile.linkedin &&
                        <a href={this.processUrl(currentUserProfile.linkedin)} target="_blank">
                          <span className="icon-linkedin" />
                        </a>
                      }
                    </div>
                    {
                      currentUserProfile.birth_place && currentUserProfile.birth_date &&
                      <h2>Born in {currentUserProfile.birth_place}, {currentUserProfile.birth_date}</h2>
                    }
                    {
                      currentUserProfile.about &&
                      <p>{currentUserProfile.about}</p>
                    }
                    <div className="detailKenalan">
                      <h6>
                        {
                          isMaba &&
                          `What you wrote for ${currentUserProfile.name.split(' ')[0]}:`
                        }
                        {
                          !isMaba &&
                          `What ${currentUserProfile.name.split(' ')[0]} wrote for you:`
                        }
                      </h6>
                      <h3>Status: <span className={value.status.status}>{value.status.status}</span></h3>
                      <h4><span className="icon-phone" />{value.detail_kenalan.phone_number}</h4>
                      <h4><span>Born in </span>{value.detail_kenalan.birth_place}, {value.detail_kenalan.birth_date}</h4>
                      <h4><span>Alumnus of </span>{value.detail_kenalan.asal_sma}</h4>
                      <h5>{value.detail_kenalan.story}</h5>
                      {linkPhotoRender}
                      {detailKenalanAction}
                    </div>
                  </div>
                </Card>
              </div>
            );
          }

          return false;
        });
      }

      return friendlist.map((value, index) => {
        const currentLow = ((currentPage - 1) * 5) + 1;
        const currentMax = currentPage * 5;

        let currentUserProfile = value.user_maba.profile;

        if (isMaba && (value.user_elemen)) {
          currentUserProfile = value.user_elemen.profile;
        }

        const elemenName = value.detail_kenalan.name ? value.detail_kenalan.name : '';
        let linkPhotoRender = null;
        if (!(value.user_elemen)) {

          linkPhotoRender = (
            <a href={value.detail_kenalan.link_photo} target="_blank">
              <span className="icon-link" /> Photo
            </a>
          );

          currentUserProfile = {
            name: elemenName,
            email: '',
            phone_number: '',
            facebook: '',
            linkedin: '',
            birth_date: '',
            birth_place: '',
          };
        }
        let detailKenalanAction = null;

        if (isMaba && value.status.status === 'rejected') {
          detailKenalanAction = (
            <div className="actions">
              <button className="edit" onClick={() => this.onOpenResubmitForm(index)}><span className="icon-send" />Edit and Resubmit</button>
            </div>
          );
        }

        if (!isMaba && value.status.status === 'pending') {
          detailKenalanAction = (
            <div className="actions">
              <button className="approve" onClick={() => this.confirmChangeStatus('approve', value.id, index)}><span className="icon-checked" />Approve</button>
              <button className="reject" onClick={() => this.confirmChangeStatus('reject', value.id, index)}><span className="icon-close" />Reject</button>
            </div>
          );
        }

        if (index + 1 >= currentLow && index + 1 <= currentMax) {
          return (
            <div className="friendCard" key={`dashboard-friend-${index}`}>
              <Card>
                <div className="friend">
                  <h1>{currentUserProfile.name.toLowerCase()}</h1>
                  <div className="importants">
                    <span><span className="icon-email" />{currentUserProfile.email}</span>
                    {
                      currentUserProfile.phone_number &&
                      <span>·</span>
                    }
                    {
                      currentUserProfile.phone_number &&
                      <span><span className="icon-phone" />{currentUserProfile.phone_number}</span>
                    }
                    {
                      currentUserProfile.facebook &&
                      <span>·</span>
                    }
                    {
                      currentUserProfile.facebook &&
                      <a href={this.processUrl(currentUserProfile.facebook)} target="_blank">
                        <span className="icon-facebook" />
                      </a>
                    }
                    {
                      currentUserProfile.linkedin &&
                      <span>·</span>
                    }
                    {
                      currentUserProfile.linkedin &&
                      <a href={this.processUrl(currentUserProfile.linkedin)} target="_blank">
                        <span className="icon-linkedin" />
                      </a>
                    }
                  </div>
                  {
                    currentUserProfile.birth_place && currentUserProfile.birth_date &&
                    <h2>Born in {currentUserProfile.birth_place}, {currentUserProfile.birth_date}</h2>
                  }
                  {
                    currentUserProfile.about &&
                    <p>{currentUserProfile.about}</p>
                  }
                  <div className="detailKenalan">
                    <h6>
                      {
                        isMaba &&
                        `What you wrote for ${currentUserProfile.name.split(' ')[0]}:`
                      }
                      {
                        !isMaba &&
                        `What ${currentUserProfile.name.split(' ')[0]} wrote for you:`
                      }
                    </h6>
                    <h3>Status: <span className={value.status.status}>{value.status.status}</span></h3>
                    <h4><span className="icon-phone" />{value.detail_kenalan.phone_number}</h4>
                    <h4><span>Born in </span>{value.detail_kenalan.birth_place}, {value.detail_kenalan.birth_date}</h4>
                    <h4><span>Alumnus of </span>{value.detail_kenalan.asal_sma}</h4>
                    <h5>{value.detail_kenalan.story}</h5>
                    {linkPhotoRender}
                    {
                      isMaba &&
                      value.status.status === 'rejected' &&
                      value.notes &&
                      <h6 className="notes">
                        Notes: {value.notes}
                      </h6>
                    }
                    {detailKenalanAction}
                  </div>
                </div>
              </Card>
            </div>
          );
        }

        return false;
      });
    }

    return (
      <div className="friendCard">
        <Card>
          <div className="friend">
            <p className="empty">You have no friends yet, go out there and meet your new family members</p>
          </div>
        </Card>
      </div>
    );
  }

  renderResubmitForm() {
    const { friendlist } = this.props.Dashboard;
    const currentlyFixing = this.state.isFixing >= 0;

    if (currentlyFixing) {
      const currentDetailKenalan = friendlist[this.state.isFixing].detail_kenalan;
      let renderName = (
        <input
          value={currentDetailKenalan.name}
          type="text"
          placeholder="Name"
          disabled
        />
      );
      let renderAngkatan = null;
      let renderLinkPhoto = null;

      if (this.state.isKenalanNonSSO) {
        renderName = (
          <input
            value={this.state.fixingData.name}
            type="text"
            placeholder="Name"
            onChange={(evt) => this.onFixingDataChange('name', evt.target.value)}
          />
        );
        renderAngkatan = (
          <input
            value={this.state.fixingData.angkatan}
            type="text"
            placeholder="Angkatan"
            onChange={(evt) => this.onFixingDataChange('angkatan', evt.target.value)}
          />
        );
        renderLinkPhoto = (
          <input
            value={this.state.fixingData.link_photo}
            type="text"
            placeholder="Link Photo"
            onChange={(evt) => this.onFixingDataChange('link_photo', evt.target.value)}
          />
        );
      }

      return (
        <div className="kenalanOverlay">
          <div className="container">
            <h1>Fix your data properly, contact the person if you need to. Resubmit if you are sure the data is correct.</h1>
            <div className="inputForm">
              {renderName}
              {
                this.state.fixingData.warning.name &&
                <h2>{this.state.fixingData.warning.name}</h2>
              }
              <input
                value={this.state.fixingData.phone_number}
                type="tel"
                placeholder="Phone Number"
                onChange={(evt) => this.onFixingDataChange('phone_number', evt.target.value)}
              />
              {
                this.state.fixingData.warning.phone_number &&
                <h2>{this.state.fixingData.warning.phone_number}</h2>
              }
              <input
                value={this.state.fixingData.birth_place}
                type="text"
                placeholder="Birth Place"
                onChange={(evt) => this.onFixingDataChange('birth_place', evt.target.value)}
              />
              {
                this.state.fixingData.warning.birth_place &&
                <h2>{this.state.fixingData.warning.birth_place}</h2>
              }
              <input
                value={this.state.fixingData.birth_date}
                type="date"
                placeholder="Birth Date"
                onChange={(evt) => this.onFixingDataChange('birth_date', evt.target.value)}
              />
              {
                this.state.fixingData.warning.birth_date &&
                <h2>{this.state.fixingData.warning.birth_date}</h2>
              }
              {renderAngkatan}
              {
                this.state.fixingData.warning.angkatan &&
                <h2>{this.state.fixingData.warning.angkatan}</h2>
              }
              <input
                value={this.state.fixingData.asal_sma}
                type="text"
                placeholder="Highschool"
                onChange={(evt) => this.onFixingDataChange('asal_sma', evt.target.value)}
              />
              {
                this.state.fixingData.warning.asal_sma &&
                <h2>{this.state.fixingData.warning.asal_sma}</h2>
              }
              <textarea
                value={this.state.fixingData.story}
                placeholder="Unique Story"
                onChange={(evt) => this.onFixingDataChange('story', evt.target.value)}
              />
              {
                this.state.fixingData.warning.story &&
                <h2>{this.state.fixingData.warning.story}</h2>
              }
              {renderLinkPhoto}
              {
                this.state.fixingData.warning.link_photo &&
                <h2>{this.state.fixingData.warning.link_photo}</h2>
              }
            </div>
            <button className="submit" onClick={this.resubmitKenalan}><span className="icon-send" />Go</button>
            <button className="cancel" onClick={this.cancelResubmitKenalan}><span className="icon-close " />Cancel</button>
          </div>
        </div>
      );
    }

    return null;
  }

  renderChangeStatusConfirmation() {
    if (this.state.isChangingStatus) {
      return (
        <div className="statusConfirmOverlay">
          <div className="confirmBox">
            <h1>Are you sure you want to <span className={this.state.isChangingStatus}>{this.state.isChangingStatus}</span> this request?</h1>
            {
              this.state.isChangingStatus === 'reject' &&
              <input
                className="rejectInput"
                placeholder="What is your reason to reject?"
                value={this.state.rejectReason}
                onChange={(evt) => this.onChange(evt.target.value, 'rejectReason')}
              />
            }
            <div className="actions">
              <button className="edit" onClick={this.cancelConfirmChangeStatus}><span className="icon-left" />No</button>
              {
                this.state.isChangingStatus === 'approve' &&
                <button className="approve" onClick={() => this.approve(this.state.changeStatusContext.id, this.state.changeStatusContext.index)}><span className="icon-checked" />Approve</button>
              }
              {
                this.state.isChangingStatus === 'reject' &&
                <button className="reject" onClick={() => this.reject(this.state.changeStatusContext.id, this.state.changeStatusContext.index)}><span className="icon-close" />Reject</button>
              }
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    const { userProfile } = this.props.Dashboard;
    const isMaba = !isEmpty(this.props.Global.user) ? this.props.Global.user.role === 'mahasiswa baru' : false;

    const pagination = this.renderPagination();
    const friendlistRender = this.renderFriendlist();
    const resubmitFormRender = this.renderResubmitForm();
    const changeStatusConfirmationRender = this.renderChangeStatusConfirmation();

    return (
      <Dashboard>
        <Helmet
          title="Dashboard"
          meta={[
            { name: 'description', content: 'Description of DashboardPage' },
          ]}
        />
        <div className="profile">
          <div className="profileWrapper">
            <div className="profileContent">
              {
                this.state.isEditing &&
                <div className="data">
                  <h3><span className="icon-user" /> My Profile</h3>
                  <h1>{userProfile.name}</h1>
                  <div className="importants">
                    <div className="inputPack">
                      <span className="icon-email" />
                      <input
                        type="email"
                        value={this.state.email}
                        placeholder="e-mail"
                        onChange={(evt) => this.onChange(evt.target.value, 'email')}
                      />
                    </div>
                    <div className="inputPack">
                      <span className="icon-phone" />
                      <input
                        type="tel"
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
                      type="date"
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
                  <h1>{userProfile.name}</h1>
                  <div className="importants">
                    <span><span className="icon-email" />{userProfile.email}</span>
                    {
                      userProfile.phone_number &&
                      <span>·</span>
                    }
                    {
                      userProfile.phone_number &&
                      <span><span className="icon-phone" />{userProfile.phone_number}</span>
                    }
                    {
                      userProfile.facebook &&
                      <span>·</span>
                    }
                    {
                      userProfile.facebook &&
                      <a href={this.processUrl(userProfile.facebook)} target="_blank">
                        <span className="icon-facebook" />
                      </a>
                    }
                    {
                      userProfile.linkedin &&
                      <span>·</span>
                    }
                    {
                      userProfile.linkedin &&
                      <a href={this.processUrl(userProfile.linkedin)} target="_blank">
                        <span className="icon-linkedin" />
                      </a>
                    }
                  </div>
                  {
                    userProfile.birth_place && userProfile.birth_date &&
                    <h2>Born in {userProfile.birth_place}, {userProfile.birth_date}</h2>
                  }
                  {
                    userProfile.about &&
                    <p>{userProfile.about}</p>
                  }
                  <button onClick={this.toggleEdit} className="edit"><span className="icon-user-edit" /> Edit</button>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="dashboardContent">
          <div className="friendlist">
            <div className="sectionHeading">
              <h1>Your friends</h1>
              {pagination}
              <div className="searchBox">
                <input
                  value={this.state.searchQuery}
                  type="text"
                  placeholder="Search here, type any name"
                  onChange={(evt) => this.onSearch(evt.target.value)}
                />
                <span>Sort By</span>
                <select
                  value={this.props.Dashboard.currentSort}
                  onChange={(evt) => this.props.changeSort(evt.target.value, isMaba)}
                >
                  <option value="status">Status</option>
                  <option value="new">Newest</option>
                  <option value="alpha">Alphabetical</option>
                </select>
              </div>
            </div>
            {friendlistRender}
            <div className="bottomPagination">
              {pagination}
            </div>
            {resubmitFormRender}
            {changeStatusConfirmationRender}
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Dashboard>
    );
  }
}

DashboardPage.propTypes = {
  changePage: PropTypes.func.isRequired,
  fetchUserProfile: PropTypes.func.isRequired,
  editUserProfile: PropTypes.func.isRequired,
  fetchFriendlist: PropTypes.func.isRequired,
  changeFriendStatus: PropTypes.func.isRequired,
  changeDetailKenalan: PropTypes.func.isRequired,
  changeSort: PropTypes.func.isRequired,
  Dashboard: PropTypes.object,
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboardPage(),
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    changePage: (page) => dispatch(changePage(page)),
    fetchUserProfile: (params) => dispatch(fetchUserProfile(params)),
    editUserProfile: (params, data) => dispatch(editUserProfile(params, data)),
    fetchFriendlist: () => dispatch(fetchFriendlist()),
    changeFriendStatus: (params, data, index) => dispatch(changeFriendStatus(params, data, index)),
    changeDetailKenalan: (params, data, paramsTwo, dataTwo, index) => dispatch(changeDetailKenalan(params, data, paramsTwo, dataTwo, index)),
    changeSort: (sort, isMaba) => dispatch(changeSort(sort, isMaba)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
