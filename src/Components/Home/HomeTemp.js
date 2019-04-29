import React from 'react';
import MockUp from '../../Images/DualMockUp.png';
import DualMockUp from '../../Images/DualMockUpChat.png';
import MackBookAirMockup from '../../Images/MackBookAir.png';
import './Home.css';
import { Link } from 'react-router-dom';

class HomeTemp extends React.Component {
    render() {
        return (
            <div className="landing_page_body">
                <div className="nav_bar">
                    <nav className='header_nav'>
                        <ul className='header_nav'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/auth'>Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="Landing_page_1">
                    <div className="container">
                        <h1>DevConnect-Chat</h1>
                        <h2>All in one collaborative chat application for developers. </h2>
                        <p className="lead hide">DevConnect is a fun little chat application for developers who want to be productive and get the most out of their time.</p>
                    </div>
                </div>
                <section className="section">
                    <div className="container_section">
                        <div className="section_head">
                            <h3>What’s new</h3>
                            <p className="lead">Project discussions, important documents, Github repo integration. All your team and work at a single place.Designed for community collaboration
                                We  provide integrations with GitHub.</p>
                            <a href="https://s3.ap-south-1.amazonaws.com/calcichat-deployments-mobilehub-1003278389/DevConnect.apk" target='_blank'  className="btn btn_primary mb" >Get DevConnect Now</a>
                            <p className="text_light txt_secorndry mt-2">DevConnect-Chat is available for Android and Web.</p>
                            <img src={MockUp} className="Mock_UP" alt="Mockup"/>
                        </div>

                    </div>

                </section>
                <section className="section light_bg">
                    <div className="container_section">
                        <h3>Free and Simple without any annoying limits</h3>
                        <p className="lead">Enjoy free unlimited chat without any annoying limits.You can communicate with unlimited people, message history and github integrations.</p>
                        <Link to="/" className="btn btn_secondry mb-3">Learn More</Link>
                        <img src={DualMockUp} className="MockUpImg" alt="DualMockUp"/>
                    </div>

                </section>
                <section className="section feature_tab">
                    <div className="container_section">
                        <div className="feature_tabs_">
                            <div>
                                <img src={MackBookAirMockup} alt="MackBookAirMockup" className="MackBookAirMockup"/>
                            </div>
                            <div>
                                <h2>Build For Community, By Community.</h2>
                                <p className="lead">Create your own team in no time and start collaborating with people around the work or you own workspace to build cool and new exciting things.Grow your community in no time with our easy invite system.</p>
                                <p className="lead">Already have an account on DevConnect?</p>
                                <hr/>
                                <Link className="text_secondry" to="/auth">
                                    <i  className="fas fa-chevron-right"></i> Start collaborating
                                </Link>
                            </div>
                        </div>

                    </div>


                </section>
                <footer className="light_bg">
                    <div className="container_section">
                        <div className="footer_colmn">
                            <ul>
                                <li>About Us</li>
                            </ul>
                            <ul>
                                <li>Twitter</li>

                            </ul>
                            <ul>
                                <li>Github</li>

                            </ul>
                            <ul>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_bottom text_center">
                        Copyright &copy; 2018 DevConnect
                    </div>
                </footer>
            </div>
        );
    }

}

export default HomeTemp;