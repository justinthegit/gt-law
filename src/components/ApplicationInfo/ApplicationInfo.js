import React, { Component } from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import {
	BlueWrapper,
	Container,
	QuestionsContainer,
	DownloadApp,
	TextContainer,
	ImageContainer,
	GreyBg
} from './style.js';
import Question from './question.js';
import downloadApple from '../../images/download-apple.svg';
import downloadGoogle from '../../images/download-google.png';


class ApplicationInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const currentStatus = this.state.isOpen;
		this.setState(
			{
				isOpen: !currentStatus
			},
			() => console.log(this.state.isOpen)
		);
	}
	render() {
		return (
			<div>
				<BlueWrapper>
					<Container>
						<h1>
							starting your career <br />with Gilbert + Tobin
						</h1>
						<p>
							Not all corporate law firms are the same, and a clerkship is the best way to experience what
							it’s really like to work here. Working under the guidance of Australia’s leading legal
							minds, on meaningful and complex transactions and matters, you’ll see the difference G+T has
							to offer. The majority of our clerks go on to work as graduate lawyers, in one of our three
							offices around Australia. <span>FAQs below</span>
						</p>
						<QuestionsContainer>
							<Question question="How do I apply for a clerkship?">
								<p>
									If you are a law student in your fourth or penultimate year of study, please apply 
										<a  target="_blank" href="https://fsr.cvmail.com.au/gtau/main.cfm?srxksl=1"> here</a> for our
									Sydney, Melbourne and Perth clerkships.
								</p>
							</Question>

							<Question question="What sort of work will I do?">
								<p>
									Depending on your office location, you will work in one or two practice areas during
									your clerkship, based on your preferences and the business needs. From your first
									day, you’ll be given the opportunity to test your skills and interest – you can
									expect to be involved in some challenging matters, and your work will be presented
									to clients. Often, you’ll work directly with a partner on a matter, or as part of a
									bigger team on larger transactions.
								</p>
								<p>
									While every experience varies, you might be asked to draft documents and memos,
									carry out research, attend client meetings and court, and assist with preparing for
									hearings or negotiations.{' '}
								</p>
							</Question>

							<Question question="Who will support me during my clerkship?">
								<p>
									You’ll be assigned a partner, who will allocate and review your work, and a mentor
									who will guide you on all aspects of working at G+T. You’ll also be given a buddy,
									who can help with any questions about your day to day experience in the office.
								</p>
							</Question>
							<Question question="What sort of training will I receive as a clerk?">
								<p>
									While your most valuable learning will be the experience of working on real matters
									during your practice group rotations, you’ll also receive structured training –
									including sessions on the different practice areas, technology, how to create your
									personal brand, and business development. It’s a practical blend of on-the-job,
									workshop and online learning that covers a broad range of technical, interpersonal
									and leadership skills.
								</p>
								<p>
									You’ll also have access to G+T’s regular practice group training with other lawyers,
									as well as online resources to help you keep up to date with the latest legal
									developments.
								</p>
							</Question>
							<Question question="Can I get involved in legal innovation as a clerk?">
								<p>
									Absolutely. We really want to hear your fresh ideas, and we know you’re already
									comfortable with new ways of working. You might be involved in a design jam session,
									exploring solutions to legal process pain points as part of a team, and your ideas
									may well be taken forward for development by our legal innovation team.{' '}
								</p>
								<p>
									You can also expect to use many new lawtech tools, including our in-house due
									diligence platform DD{`<i>`}, document automation and collaboration platforms, and smart
									search tools.
								</p>
							</Question>

							<Question question="Can I contribute to the Pro Bono practice?">
								<p>
									All clerks have the opportunity to get involved in pro bono matters. This work may
									be directly related to your practice area, or you may be asked to represent G+T at
									community legal centres or one of our many other external community programs. If you
									clerk in Sydney, you may have the opportunity to work on a pro bono project, or
									complete a rotation in our Pro Bono team.{' '}
								</p>
							</Question>

							<Question question="What sort of networking opportunities are available?">
								<p>
									G+T is an open, friendly environment and you’ll build strong relationships with your
									peers, and with more experienced lawyers within your practice area. Through
									structured training you’ll have opportunities to connect across the firm, and you
									can also expect to meet clients.
								</p>
								<p>
									Our clerks tell us their experience is fun and often leads to lifelong friendships
									as well as a valuable professional network. Social events include our annual
									Christmas Party, practice group drinks, lunch catch-ups, volunteering and sports
									competitions.
								</p>{' '}
							</Question>
							<Question question="Can I get involved in community activities?">
								<p>
									We’re committed to making a positive impact in our community, and there are
									opportunities to volunteer, such as mentoring high school students, or taking part in
									our reconciliation initiatives, such as cultural awareness training. Our 	<a  target="_blank" href="https://www.gtlaw.com.au/about-us/community/corporate-social-responsibility">
										Corporate Social Responsibility</a> program
									also focuses on reducing our environmental impact.
								</p>
							</Question>

							<Question question="What do you look for in a clerkship application?">
								<p>
									We want to learn who you are as an individual – what makes you stand out, what
									intrigues you and what you’re looking for. While there is no ‘typical’ G+T clerk or
									graduate, they do have a few things in common, including enthusiasm and drive. Your
									application is also a good place to showcase your strong communication skills and
									attention to detail.{' '}
								</p>
							</Question>

							<Question question="What is the interview process, and how can I prepare?">
								<p>
									Before you apply, it’s a good idea to talk with as many people as you can about what
									it’s really like to work here – visit us at career fairs or come to our
									presentations on campus, and take advantage of every opportunity to ask questions.
									We recommend you start this process early.
								</p>

								<p>
									During the interview, we want to meet the ‘real’ you – this is your chance to show
									you’ll make a proactive and positive contribution to our team. But the most
									important thing you can do is relax. By this stage, you’ve already proven you have
									the academic credentials and skills we’re looking for – we want to see if you’ll fit
									into a team where we don’t take ourselves too seriously, and enjoy what we do.{' '}
								</p>
							</Question>

							<Question question="Do you offer Indigenous traineeships?">
								<p>
									Our{' '}
									<a  target="_blank" href="https://www.gtlaw.com.au/careers/your-career/law-students/indigenous-cadetship-program">
										Indigenous legal cadetship{' '}
									</a>lets you complete your studies while working with us part-time.
								</p>
							</Question>

							<Question question="If I don’t clerk with G+T, can I still join the firm as a graduate?">
								<p>
									While many of our clerks are welcomed to join us on completing their studies, we
									also invite interest from law graduates who may have had their clerkship experience
									elsewhere.
								</p>

								<p>
									Our graduate lawyers complete a formal 18-month program, working directly with
									partners and lawyers across at least two practice rotations.{' '}
									<a  target="_blank"  href="https://www.gtlaw.com.au/careers/your-career/law-students/graduate-program">
										Learn more
									</a>
								</p>
							</Question>

							<Question question="What career opportunities are available outside the graduate program?">
								<p>
									G+T is always looking for talented, ambitious people to join our practice groups,
									business operations and support areas. We’re seeking passion, diversity and
									individuality, and you’ll have many opportunities for growth and development. We
									also have many great opportunities for you to support our community and social
									initiatives, no matter what your role. If you think this sounds like a place where
									you’ll thrive, get in touch with our 	<a  target="_blank" href="mailto:gtcareers@gtlaw.com.au ">Talent Team</a> or browse current vacancies via our{' '}
									<a  target="_blank" href=" https://www.gtlaw.com.au/careers/browse-jobs"> Careers page</a>.
								</p>
							</Question>
						</QuestionsContainer>
					</Container>
				</BlueWrapper>

				<GreyBg>
					<DownloadApp>
						<TextContainer>
							<div>
								<h1>READY TO WRITE YOUR OWN STORY AT GILBERT+TOBIN?</h1>
								<p>
								Download the Zappar app to unlock more insights into the opportunities and people at G+T, in our interactive brochure.
								</p>
							</div>
							<div>
								<a  target="_blank" href="https://play.google.com/store/apps/details?id=com.zappar.Zappar
					">
									<img
										src={downloadGoogle}
										alt=""
									/>
								</a>

								<a  target="_blank" href="https://itunes.apple.com/gb/app/zappar/id429885268
				">
									{' '}
									<img src={downloadApple} alt="" />
								</a>
							</div>
						</TextContainer>
						<ImageContainer>
							<Image />
						</ImageContainer>
					</DownloadApp>
				</GreyBg>
			</div>
		);
	}
}

const Image = () => (
	<StaticQuery
		query={graphql`
			query {
				placeholderImage: file(relativePath: { eq: "bottom.jpg" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1440) {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
			}
		`}
		render={(data) => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
	/>
);

export default ApplicationInfo;
