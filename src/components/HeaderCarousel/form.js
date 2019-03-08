import React, { Component } from 'react';
import { FormContainer, FormWrap, Input, TextArea, Button, FormWrapper } from './style.js';
import { Formik } from 'formik';

import closeBtn from '../../images/close-btn.svg';

class Form extends Component {
	render() {
		return (
			<FormContainer formOpen={this.props.formOpen}>
				<Formik
					initialValues={{ name: '', email: '', textArea: '' }}
					validate={(values) => {
						let errors = {};
						if (!values.email) {
							errors.email = 'Email is Required';
						} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
							errors.email = 'Invalid email address';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);

						console.log(values);
					}}
				>
					{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
						<FormWrapper  formOpen={this.props.formOpen}>

							<div onClick={this.props.handleClick}>
								<img src={closeBtn} alt="" />
							</div>

							<FormWrap onSubmit={handleSubmit}>
								<p>
									Interested in learning more about opportunities with G+T? Please enter your details
									hereand we’ll be in touch.
								</p>
								<Input
									placeholder="Full name"
									type="name"
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
								{errors.name && touched.name && errors.name}

								<Input
									placeholder="name@email.com"
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
								{errors.email && touched.email && errors.email}

								<TextArea
									placeholder="Tell us what you would like to know more about...."
									type="textArea "
									name="textArea"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.textArea}
								/>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim vehicula
									nibh, et sollicitudin libero gravida sed. Donec mollis consequat mauris rhoncus
									iaculis. Integer et porta felis, eu tincidunt lacus. Donec placerat eros vel lectus
									dignissim rutrum ut nec ex.
								</p>
								<Button type="submit" disabled={isSubmitting}>
									SUBMIT
								</Button>
							</FormWrap>
						</FormWrapper>
					)}
				</Formik>
			</FormContainer>
		);
	}
}

export default Form;