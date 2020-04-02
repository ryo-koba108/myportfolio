
import React from 'react';
import {
  Container,
  Row,
  Col,
  Table
} from 'reactstrap';
import imgicon from '../img/koba-img.jpg';

class Home extends React.Component {
  render(){
    return(
      <div>
        <Container>
          <Row className="mb-1">
            <Col className="text-center" md="12">
              <img className="profile-image" src={imgicon} alt="" />
            </Col>
          </Row>
          <Row>
            <Col className="mt-3 text-center" sm="12" md={{ size: 8, offset: 2 }}>
              <h5>小林 涼太 (こばやし りょうた)</h5>
              <p>1995/8/21 (24)</p><br/>
              <h3>経歴</h3>
                <Table>
                <tbody>
                  <tr>
                    <th>2018.4 - 2019.7</th>
                    <td>株式会社ファミリーマートにて直営店店長として店舗の売り上げ向上や経費削減の施作に従事</td>
                  </tr>
                  <tr>
                    <th>2019.9 - 2019.12</th>
                    <td>株式会社夢テクノロジーにて1ヶ月間Javaの研修をした後、派遣先でシステムの運用管理業務に従事</td>
                  </tr>
                  <tr>
                    <th>現在</th>
                    <td>フロントエンドエンジニアになるため,転職活動中</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
              <h3>勉強してきた(している)スキル</h3>
              HTML, CSS, Bootstrap, JavaScript, Node.js, React, Ruby, Rails, Java, Git, Heroku
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Home;