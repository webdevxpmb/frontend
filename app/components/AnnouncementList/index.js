/**
*
* AnnouncementList
*
*/

import React from 'react';
import Card from '../Card';
import { Item, Announcement } from './styled';

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
        const post = `1. Pendaftar dan peserta wajib mengikuti semua peraturan yang tertera pada guideline.<br />
                      2. Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada website resmi CompFest 9.<br />
                      3. Masa pendaftaran Data Science Academy adalah 14 Mei 2017 sampai 18 Juni 2017.<br />
                      4. Data Science Academy dibuka untuk umum dengan batasan umur dari 17 sampai 25 tahun.<br />
                      5. Peserta harus mengisi formulir pendaftaran dengan lengkap dan memberikan informasi yang bisa dipertanggungjawabkan.<br />
                      6. Peserta merupakan Warga Negara Indonesia dan wajib membawa kartu pengenal. Kartu pengenal yang kami terima adalah KTP/SIM/kartu pelajar yang masih berlaku.<br />
                      7. Setiap tim terdiri dari minimal 1 peserta dan maksimal 3 orang peserta.<br />
                      8. Setiap peserta hanya diperbolehkan terdaftar di satu tim.<br />
                      9. Setiap anggota tim diperbolehkan berasal dari sekolah/institusi yang berbeda.<br />
                      10. Peserta yang boleh mengikuti akademi adalah peserta yang sudah terdaftar dan tidak boleh diganti oleh orang lain selama akademi berlangsung.<br />
                      11. Peserta yang tidak memenuhi persyaratan pendaftaran sampai waktu yang ditentukan akan dinyatakan gugur.<br />
                      12. Peserta menyetujui apabila sewaktu-waktu dihubungi oleh panitia CompFest 9 maupun partner dari CompFest 9.`;
        let content;
        if (post.length > 240) {
          content = `${post.substring(0, 300)} ...`;
        } else {
          content = post;
        }
        postItems.push(
          <Item key={i}>
            <div className="media-primary">
              <div className="media-body">
                <div className="header">
                  <a href="#"><h1 className="media-heading">BESOK EVAL WLEEEE!!</h1></a>
                  <p className="command">
                    <a href="https://google.com">Admin</a> | {i}-September-2017, 11.00 PM
                  </p>
                </div>
                <div className="media-content" dangerouslySetInnerHTML={{ __html: content }} />
                <button className="read-more">
                  Read More
                </button>
              </div>
            </div>
          </Item>
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
