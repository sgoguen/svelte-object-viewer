import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { getRenderType } from './common/meta';


export function Viewer(i: { value: unknown, maxDepth?: number }) {
    const maxDepth = i.maxDepth || 1;
    const info = getRenderType(i.value);
    return (
        <Container>
            <Row>
                <Col>
                    <Json value={{ info, maxDepth }}></Json>
                </Col>
            </Row>
        </Container>
    );
}

export function Json(i: { value: unknown }) {
    return (<pre>{JSON.stringify(i.value, null, 2)}</pre>)
}

export function SimpleObject(props: { value: object }) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );
}