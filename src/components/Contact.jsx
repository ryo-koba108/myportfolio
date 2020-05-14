
import React from 'react';
import {
  Container,
  Row,
  Col,
  Table
} from 'reactstrap';

class Contact extends React.Component {
  render(){
    return(
      <Container>
      <Row className="mb-3">
        <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
          <h5>お問い合わせ</h5>
          <Table>
            <tbody>
              <tr>
                <th>GitHub</th>
                <td><a href="https://github.com/ryo-koba108" rel="noreferrer noopener" target="_blank">GitHub(別タブで開く)</a></td>
              </tr>
              <tr>
                <th>qiita</th>
                <td><a href="https://qiita.com/koba_prog" rel="noreferrer noopener" target="_blank">Qiita(別タブで開く)</a></td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>ryota.kobayashi108@gmail.com</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    )
  }
}


export default Contact;