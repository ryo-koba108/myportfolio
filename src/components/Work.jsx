
import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import workimg from '../img/homepage_full.jpg';

class Work extends React.Component {
  render(){
    return(
      <div>
        <h1 className="text-center mb-5">成果物</h1>
        <Container>
          <Row className="mb-1">
            <Col className="text-center" md="6">
              <img className="work-image w-50" src={workimg} alt=""/>
            </Col>
            <Col md="6">
              <h2 className="text-center">カーコーティング会社のLP作成</h2><hr/>
              <p>・<a href="https://mspolish.herokuapp.com/" rel="noreferrer noopener" target="_blank">実際のページ</a>
              ・<a href="https://github.com/ryo-koba108/mspolish_homepage" rel="noreferrer noopener" target="_blank">GitHub</a></p>
              <p>・使用した言語<br/> HTML, CSS, Bootstrap</p>
              <p>・説明<br/>知り合いの企業さんからLP制作の依頼をいただき作成中です。
                Bootstrapを利用してレスポンシブにも対応させています。
                <br/>企業さんの希望を伺いつつ現在も修正したり機能を追加したりしています。<br/>
                ポートフォリオの一貫としての利用の許可をいただき、アプリとしてherokuにデプロイしています。
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Work;