import React from 'react';
import { Container, Row, Col, Card, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <h1>Bienvenido a Mi App!</h1>
        <p>Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar a React + Ant Design.</p>
      </div>

      <img
        src="https://komitmeniklim.id/wp-content/uploads/2020/06/Hutan-Pinus-di-Jogja.png"
        alt="Imagen central"
        className="img-fluid rounded mt-4"
      />
     

      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Usuarios</Card.Title>
              <Card.Text>Gestiona el listado de usuarios registrados.</Card.Text>
              <Button as={Link} to="/registro" variant="primary">Ir a Registro</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Cálculo de Sueldos</Card.Title>
              <Card.Text>Calcula el sueldo neto de cada empleado.</Card.Text>
              <Button as={Link} to="/sueldo" variant="success">Ir a Sueldo</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Registro Rápido</Card.Title>
              <Card.Text>Registra nuevos usuarios fácilmente.</Card.Text>
              <Button as={Link} to="/registro" variant="info">Registrar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Alert variant="success" className="mt-4">Bienvenido al sistema de usuarios y nómina.</Alert>
      <Alert variant="info">Recuerda completar todos los campos antes de calcular.</Alert>
    </Container>
  );
};

export default Home;


