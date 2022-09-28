export default function MealEntry(){
	return(
		<Row className="md-auto">
			<Col xs = {4}></Col>
			<Col xs={4} style={{"padding":"20px"}} className="md-auto">
				<Form>
        			<Form.Group controlId="formName">
            			<Form.Label>Name</Form.Label>
            			<Form.Control type="text" placeholder="Enter name" />
        			</Form.Group>
        			<Form.Group className="mt-3">
        				<Form.Label>Calories</Form.Label>
            			<Form.Control type="text" placeholder="Enter Calories" />
        			</Form.Group>
        			<Form.Group className="mt-3">
        				<DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
        			</Form.Group>
        			<Button variant="primary" type="submit" className="mt-3">
    					Submit
  					</Button>
      			</Form>
      		</Col>
      		<Col xs = {4}></Col>
			</Row>
	)
}