import React, { Component } from 'react';
import { BlueWrapper, Container, AreasContainer, AreasRow, HorizontalLine } from './style.js';
import Area from './area.js'

class Areas extends Component {
	render() {
		return (
			<BlueWrapper>
				<Container>

					<h1>practice areas</h1>
					<AreasContainer>
						<AreasRow>

						<HorizontalLine mobile/>

						<Area title="BANKING + INFRASTRUCTURE" url="banking-and-infrastructure"/>
							<HorizontalLine mobile/>

							<Area title="COMPETITION + REGULATION" url="competition-and-regulation"/>
							<HorizontalLine mobile/>

							<Area title="CORPORATE ADVISORY" url="corporate-advisory"/>
							<HorizontalLine mobile/>

						
						

							<Area title="DISPUTES + INVESTIGATIONS" url="litigation-dispute-investigations"/>
							<HorizontalLine mobile/>

						</AreasRow>

						<HorizontalLine desktop/>

						<AreasRow>
						<Area title="ENERGY + RESOURCES" url="energy-and-resources"/>
							<HorizontalLine mobile/>
							<Area title="INTELLECTUAL PROPERTY" url="intellectual-property"/>
							<HorizontalLine mobile/>

							<Area title="PRO BONO" url="pro-bono"/>
							<HorizontalLine mobile/>


							<Area title="REAL ESTATE + PROJECTS" url="real-estate-and-projects"/>
							<HorizontalLine mobile/>

			

					

							


						</AreasRow>
	
						<HorizontalLine desktop/>

						<AreasRow>
					

<Area title="TAX" url="tax"/>
<HorizontalLine mobile/>

<Area title="TECHNOLOGY + DIGITAL" url="technology-digital"/>
	<HorizontalLine mobile/>
						
				

						</AreasRow>
					</AreasContainer>
				</Container>
			</BlueWrapper>
		);
	}
}

export default Areas;
