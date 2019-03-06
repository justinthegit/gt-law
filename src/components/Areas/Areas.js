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
							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

						</AreasRow>

						<HorizontalLine desktop/>

						<AreasRow>
							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

						</AreasRow>

						<HorizontalLine desktop/>

						<AreasRow>
							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

							<Area title="COMPETITION + REGULATION"/>
							<HorizontalLine mobile/>

						</AreasRow>
					</AreasContainer>
				</Container>
			</BlueWrapper>
		);
	}
}

export default Areas;
