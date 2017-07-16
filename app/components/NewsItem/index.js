/**
*
* NewsItem
*
*/

import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

const Item = styled.div`
  background-color: #fff;
  width: 95%;
  padding: 1em;
  border-radius: 0.5em;
  margin: 0.5em auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  overflow: auto;
  .media-primary {
    border-bottom: 1px solid #C6C8CA;
    display: -webkit-flex;
    display: flex;
  }
  .media-left {
    margin-right: 1em;
    width: 60px;
    .img-container {
      width: 60px;
      border-radius: 50%;
      overflow: hidden;
      .media-img { width: 100%; }
    }
  }
  .media-body { width: 90%; }
  .media-info , .media-heading { margin: 0; }
  .media-action {
    margin-top: 1em;
    float: right;
    .comment { margin: 0 0.5em; }
  }
`;

class NewsItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Item>
        <div className="media-primary">
          <div className="media-left">
            <div className="img-container">
              <img className="media-img" src="https://pbs.twimg.com/profile_images/780731113685684224/fpuJ_2il_400x400.jpg" alt="PMB Fasilkom UI 2017" />
            </div>
          </div>
          <div className="media-body">
            <h2 className="media-heading"><a href="">Lorem ipsum dolor sit amet</a></h2>
            <p className="media-info">oleh <a href="https://google.com">Harry Akbar Ali Munir</a> - Friday, 26 May 2017, 1:06 PM</p>
            <div className="media-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat semper condimentum. Nullam quis velit eu elit dictum consectetur. Quisque diam odio, sollicitudin et lobortis ut, commodo ac purus. Donec ac purus commodo, pharetra nisl ac, ultricies purus. Pellentesque non dui sollicitudin, convallis sem ac, vulputate quam. Donec luctus bibendum velit, eget facilisis magna viverra ut. Vivamus eget ex turpis.
              Donec turpis est, consectetur sit amet dolor vitae, molestie lobortis massa. Fusce congue non dui a scelerisque. Aenean ut maximus nisi. Suspendisse neque magna, aliquet at pretium vitae, feugiat non diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ligula ipsum, maximus sit amet odio non, malesuada bibendum dui. Cras auctor aliquam est. Phasellus eu tortor blandit, mattis velit id, mattis turpis. Sed at semper tellus. Praesent mi lacus, sagittis ut sagittis vel, varius vitae neque. Mauris auctor fringilla justo, nec dictum odio tincidunt ut.
  Aenean vel lectus non ex maximus facilisis. Etiam eleifend vestibulum orci, ut facilisis odio vulputate vitae. Integer rutrum, enim vehicula bibendum convallis, erat orci convallis magna, id suscipit nulla nunc sit amet magna. Sed tempus nec leo vitae vestibulum. Vestibulum vel mauris vitae lorem consectetur semper. Etiam a augue eget mauris molestie molestie in dictum eros. Maecenas venenatis dolor eget purus lobortis condimentum. Pellentesque rutrum accumsan odio id auctor. Cras sodales lorem a neque condimentum tincidunt.
  Fusce sed nibh luctus, elementum magna a, hendrerit nulla. Ut vel erat sed mauris iaculis interdum vel eu erat. Morbi ac maximus nunc, ut tristique felis. Morbi tempus lacinia arcu, quis cursus nibh. Nullam pretium sit amet nunc a pellentesque. Fusce mollis dignissim purus eget dignissim. Phasellus in ante lorem. Nunc id purus mattis, volutpat magna vulputate, rhoncus lorem. Aenean et malesuada mi. Donec sit amet mollis ligula, sed varius quam.
  Sed laoreet odio lacus, non vestibulum mi pharetra hendrerit. Nunc tempus lectus a enim varius lacinia. Nam scelerisque orci a arcu placerat convallis. Maecenas laoreet egestas erat, quis iaculis velit consequat ac. Ut luctus sollicitudin lacus. In in luctus ligula. Sed et hendrerit turpis. Aliquam auctor maximus fermentum. Donec ut sapien malesuada, auctor sapien ut, pretium nulla. Morbi quis efficitur magna. Nam auctor luctus ex ac cursus. Integer vestibulum tortor neque, id vestibulum magna dignissim ullamcorper. In at iaculis orci.</p>
            </div>
          </div>
        </div>
        <div className="media-action">
          <a className="comment" href="">6 comments</a>
          <Button className="action">Reply</Button>
        </div>
      </Item>
    );
  }
}

NewsItem.propTypes = {

};

export default NewsItem;
