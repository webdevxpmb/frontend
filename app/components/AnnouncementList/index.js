/**
*
* AnnouncementList
*
*/

import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import AnnouncementItem from '../AnnouncementItem';

const Announcement = styled.div`
  padding: 1em;
  .item {
    margin: 2em;
  }
  h4 {
    font-family: 'Montserrat';
    font-weight: 700;
  }

  .pagination {
    margin: auto;
    text-align: center;
  }
  .pagination button {
    padding: 1em;
    &.active {
      background: ${(props) => props.theme.dark};
      color: white;
    }
  }
`;

class AnnouncementList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      currentPage: 0,
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }


  setCurrentPage(index) {
    this.setState({
      currentPage: index,
    });
  }

  next() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  prev() {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }


  render() {
    const postItems = [];
    const pagination = [];
    // const posts = this.props.posts.posts;
    const maxPostPerPage = 5;
    let postsRendered = 0;

    for (let i = this.state.currentPage * maxPostPerPage; i < 50; i += 1) {
      if (postsRendered < maxPostPerPage) {
        // const post = posts[i];

        postItems.push(
          <AnnouncementItem
            key={i}
            className="item"
            header="BESOK EVAL WLEEEE!!"
            article="Lorem iIta commodo nisl non hendrerit. Vestibulum a interdum ipsum, at lacinia nisl. Quisque vitae elit finibus, gravida ipsum non, vehicula massa. Donec finibus bibendum vulputate. Maecenas gravida, nibh et semper malesuada, dui dolor ornare nibh, sed eleifend diam ipsum ac mi. Ut rutrum augue sed enim convallis, eget finibus felis feugiat. Donec malesuada, dolor non vulputate sagittis, libero quam pretium nibh, at vulputate risus nisi in metus. Cras porta ligula ex, non interdum sapien dictum a. Vivamus blandit varius velit vel sodales. Ut vehicula ligula tortor, non aliquet ipsum convallis vitae.<br /><br/>Donec bibendum sagittis rhoncus. Aenean a dapibus nisi. Nulla vehicula ultrices purus, vel egestas orci venenatis a. Vestibulum porta at odio at placerat. Praesent eleifend sit amet ipsum nec finibus. Morbi eu fermentum leo, eget gravida nibh. Fusce tellus mauris, dignissim a velit vitae, commodo imperdiet risus. Nulla nec lorem ligula."
            publisher="Admin"
            date="20-September-2017"
            time="11.00 PM"
            countComment={i}
          />
        );
      }
      postsRendered += 1;
    }

    for (let i = 0; i < 50 / maxPostPerPage; i += 1) {
      const index = i;
      pagination.push(
        <button key={i} className={index === this.state.currentPage ? 'active' : ''} onClick={() => this.setCurrentPage(index)}>
          {i >= 0 && i + 1}
        </button>
      );
    }

    return (
      <Card>
        <Announcement>
          <h4>Pengumuman</h4>
          {postItems}
          <div className="pagination">
            {pagination}
          </div>
        </Announcement>
      </Card>
    );
  }
}

AnnouncementList.propTypes = {

};

export default AnnouncementList;


{/*<AnnouncementItem
  className="item"
  header={item.header}
  article={item.article}
  publisher={item.publisher}
  date={item.date}
  time={item.time}
  countComment={item.countComment}
/>*/}

// return (
//   <Card>
//     <Announcement>
//       <h4>Pengumuman</h4>
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Lorem iIta commodo nisl non hendrerit. Vestibulum a interdum ipsum, at lacinia nisl. Quisque vitae elit finibus, gravida ipsum non, vehicula massa. Donec finibus bibendum vulputate. Maecenas gravida, nibh et semper malesuada, dui dolor ornare nibh, sed eleifend diam ipsum ac mi. Ut rutrum augue sed enim convallis, eget finibus felis feugiat. Donec malesuada, dolor non vulputate sagittis, libero quam pretium nibh, at vulputate risus nisi in metus. Cras porta ligula ex, non interdum sapien dictum a. Vivamus blandit varius velit vel sodales. Ut vehicula ligula tortor, non aliquet ipsum convallis vitae.<br /><br/>Donec bibendum sagittis rhoncus. Aenean a dapibus nisi. Nulla vehicula ultrices purus, vel egestas orci venenatis a. Vestibulum porta at odio at placerat. Praesent eleifend sit amet ipsum nec finibus. Morbi eu fermentum leo, eget gravida nibh. Fusce tellus mauris, dignissim a velit vitae, commodo imperdiet risus. Nulla nec lorem ligula."
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet lectus ante. Suspendisse sollicitudin porta mi, sit amet malesuada ante. Morbi eu eros et risus aliquam faucibus sollicitudin eget enim. Praesent euismod augue id lorem efficitur imperdiet. Nam efficitur lorem vel tincidunt condimentum. Maecenas vestibulum metus elit, in venenatis risus pellentesque vel. Phasellus iaculis augue ante, sit amet ullamcorper est volutpat vitae. In hac habitasse platea dictumst.<br/><br/>
//                 In faucibus finibus nulla, scelerisque rutrum ligula ultrices ut. Vestibulum faucibus eros nec sapien volutpat suscipit. Nullam cursus dolor in suscipit aliquet. Praesent et turpis leo. Cras viverra massa in tortor facilisis, vel semper sapien vehicula. Cras euismod eros sed lacinia pharetra. Pellentesque pulvinar diam lorem, ut blandit elit molestie quis. Pellentesque auctor justo urna, id volutpat eros mollis vitae. Mauris condimentum semper justo, at semper ex fringilla a. In vel semper nunc. In iaculis, est ac vestibulum venenatis, risus libero egestas lacus, at pellentesque arcu nisi vitae ligula. Proin dui odio, pretium eu libero sit amet, pulvinar aliquam diam. Curabitur tincidunt, nisi ac hendrerit efficitur, nibh tellus porttitor odio, ut efficitur massa magna sed neque. In a turpis non mauris gravida commodo.<br /><br/>
//                 Proin eu nunc quam. In in tristique tellus. Ut non magna in sapien imperdiet maximus at sed felis. Maecenas condimentum, velit eget consectetur pretium, metus ex mollis risus, in consectetur sem urna sed erat. Vestibulum sollicitudin id dolor at finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum quis dui gravida augue facilisis consequat. Nam gravida, lorem non laoreet tempus, neque lectus tempor lectus, at pretium leo ante ut nunc. Curabitur aliquet arcu id arcu suscipit, eu rhoncus est vehicula. Fusce a laoreet elit. Curabitur facilisis dolor eget turpis consectetur, eget pharetra massa fermentum.<br /><br/>
//                 Donec porta commodo nisl non hendrerit. Vestibulum a interdum ipsum, at lacinia nisl. Quisque vitae elit finibus, gravida ipsum non, vehicula massa. Donec finibus bibendum vulputate. Maecenas gravida, nibh et semper malesuada, dui dolor ornare nibh, sed eleifend diam ipsum ac mi. Ut rutrum augue sed enim convallis, eget finibus felis feugiat. Donec malesuada, dolor non vulputate sagittis, libero quam pretium nibh, at vulputate risus nisi in metus. Cras porta ligula ex, non interdum sapien dictum a. Vivamus blandit varius velit vel sodales. Ut vehicula ligula tortor, non aliquet ipsum convallis vitae.<br /><br/>Donec bibendum sagittis rhoncus. Aenean a dapibus nisi. Nulla vehicula ultrices purus, vel egestas orci venenatis a. Vestibulum porta at odio at placerat. Praesent eleifend sit amet ipsum nec finibus. Morbi eu fermentum leo, eget gravida nibh. Fusce tellus mauris, dignissim a velit vitae, commodo imperdiet risus. Nulla nec lorem ligula."
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet lectus ante. Suspendisse sollicitudin porta mi, sit amet malesuada ante. Morbi eu eros et risus aliquam faucibus sollicitudin eget enim. Praesent euismod augue id lorem efficitur imperdiet. Nam efficitur lorem vel tincidunt condimentum. Maecenas vestibulum metus elit, in venenatis risus pellentesque vel. Phasellus iaculis augue ante, sit amet ullamcorper est volutpat vitae. In hac habitasse platea dictumst.."
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Oi"
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Oi"
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Oi"
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Oi"
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Oi"
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Oi"
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//       <AnnouncementItem
//         className="item"
//         header="BESOK EVAL WLEEEE!!"
//         article="Oi"
//         publisher="Admin"
//         date="20-September-2017"
//         time="11.00 PM"
//         countComment="7"
//       />
//     </Announcement>
//   </Card>
// );
