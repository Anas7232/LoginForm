import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css';
import { IoIosBook, IoIosChatboxes, IoIosStar, IoMdPhotos } from 'react-icons/io';

/**
* @author
* @function Homepage
**/

const HomePage = (props) => {
    return (

        <>
            <Layout>
                <Container fluid className="main_home">
                    <Row>
                        <Col md={12}>
                            <Container className="middle_container">
                                <Row>
                                    <Col md={5} className="bg_height">
                                        <div className="bg_image"></div>
                                    </Col>
                                    <Col md={7}>
                                        <h1 className="text_h1"> We are Passionate about Laundry </h1>
                                        <p className="text_paragraph"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro laboriosam rerum fugiat quod ullam earum dignissimos corporis, nemo provident nostrum, nihil culpa. Et corrupti sit hic amet, animi unde cumque consequuntur omnis ad nihil optio id eum qui, impedit deleniti? Veniam eum aspernatur incidunt? Doloremque, cum? Repellendus consectetur, cupiditate tenetur provident neque, quas, totam eveniet nisi eius veritatis ea maiores ducimus a reprehenderit minima magnam dicta! Aliquam libero voluptatum facilis dolorum architecto? Doloribus fuga voluptate voluptatem corporis rem! Culpa nam et accusamus beatae! </p>
                                        <p className="text_paragraph"> Donec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at, semper varius orci. Nulla accumsan ac elit in congue. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id provident dolore aut delectus repellat cupiditate!

</p>
                                    <button className="read_more"> Dead More </button>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '30px'}}>
                                    <Col md={3} className="icons_height">
                                        <IoIosBook className="main_icons_bar" /> 
                                        <h2 className="main_h1_text"> Read Books </h2>
                                        <p className="main_paragraph_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro laboriosam rerum </p>
                                    </Col>
                                    <Col md={3} className="icons_height"> 
                                    <IoIosChatboxes className="main_icons_bar" /> 
                                        <h2 className="main_h1_text"> Eco Friendly </h2>
                                        <p className="main_paragraph_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro laboriosam rerum </p>
                                    </Col>
                                    <Col md={3} className="icons_height"> 
                                    <IoIosStar className="main_icons_bar" /> 
                                        <h2 className="main_h1_text"> Self Services </h2>
                                        <p className="main_paragraph_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro laboriosam rerum </p>
                                     </Col>
                                    <Col md={3} className="icons_height"> 
                                    <IoMdPhotos className="main_icons_bar" /> 
                                        <h2 className="main_h1_text"> Law & Principles </h2>
                                        <p className="main_paragraph_p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro laboriosam rerum </p>
                                     </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>

    )

}

export default HomePage;