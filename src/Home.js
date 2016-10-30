import React, { Component } from 'react'
import { Link,Router, Route, IndexRoute, hashHistory } from "react-router";
import { Parallax,Background } from 'react-parallax';
import {Carousel,Grid,Row,PageHeader,Col,Clearfix,Glyphicon,Label,Button} from 'react-bootstrap';
class Home extends Component {

    render(){
        const head ={color: '#ffffff'};
        const foot = {color: '#428bca'};
        return (
            <div>
            <div>
                <Parallax bgImage="background1.jpg" strength={200}>
                <div style={{
                    width: 800,
                    height: 300

                }}></div>
                <br/>
                    <PageHeader style={head} className="text-center"> Honor Code </PageHeader>
                    <h4 style={head} className="text-center"> the study guide site </h4>
                    <div className="text-center">
                    <Button bsStyle="default" bsSize="small"> <Link to="/register" className="navbar-brand">Register</Link> </Button>
                    </div>
                    <br/>
                    <br/> //questionable methods
            </Parallax>

            </div>
            <div>
            <br/>
                <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={4} ><h1 className="text-center"><Glyphicon glyph="glyphicon glyphicon-blackboard" /><br/> Be Efficient </h1><p>Utilize Honor Code's growing number of study guides to ace that next test. Think about it! The information you need is already here. Why do extra work?</p></Col>
                    <Col sm={6} md={4} ><h1 className="text-center"><Glyphicon glyph="glyphicon glyphicon-apple" /><br/> Be Connected </h1><p> Studies show that collaborative learning has many benefits. Why not take advantage of our tool to get together with friends and learn together? </p></Col>
                    <Col sm={6} md={4} ><h1 className="text-center"><Glyphicon glyph="glyphicon glyphicon-education" /><br/> Be Successful </h1><p>Get the grades and test scores you want with this easy to use tool. Stop your search, this is the study site you've been looking for.</p></Col>
                </Row>
                </Grid>
            <br/>
            </div>
            <div>
                <Carousel>
                <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="background3.jpg"/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="background2.jpg"/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="background1.jpg"/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div classname ="text-center">
            <h1 className= "text-center">Contact Us</h1>
            <h4 className= "text-center"> We'll get back to you as soon as we can. Thank you!</h4>
            <h4 className= "text-center"> Email: <a href="mailto:eberlik@gmail.com">eberlik@gmail.com</a></h4>
            <h4 className= "text-center"> Phone: <a>5713276988</a></h4>

            </div>
                <div>
                <Parallax bgImage="background2.jpg" strength={200}>
                    <div style={{
                    width: 800,
                        height: 300

                }}></div>
                <br/>
                    </Parallax>

                    </div>
                <div classname ="text-center">
                    <h1 className= "text-center">About Us</h1>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} xsOffset={3}> We created this tool to help students who don't have access to top learning tools to have the information they need to succeed in an academically rigorous environment. We are always open to feedback as to how to make our tool better. </Col>
                            </Row>
                    </Grid>
            <br/>
            <br/>
            <br/>

        </div>
        </div>
    )
    }
}
export default Home;