import { Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { InputArea, InputLabel } from "./styles";
import { SchemaType, validationSchema } from "../../Schema";
import PillButton from "../PillButton";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import Dropzone from "../Dropzone/Dropzone";

const VehicleForm = ({ initialValues, onSubmit }: SchemaType) => {
  const navigateTo = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      navigateTo("/");
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="mt-4"
      data-testid="vehicle-list-form-container"
    >
      <Row xs={1} md={2} className="mb-4">
        <Col>
          <Form.Group controlId="formBrand" className="mb-3 fw-bold">
            <InputLabel>Marca</InputLabel>
            <InputArea
              type="text"
              placeholder="Digite a marca"
              {...formik.getFieldProps("brand")}
              isInvalid={!!formik.touched.brand && !!formik.errors.brand}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.brand as ReactNode}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formModel" className="mb-3 fw-bold">
            <InputLabel>Modelo</InputLabel>
            <InputArea
              type="text"
              placeholder="Digite o modelo"
              {...formik.getFieldProps("model")}
              isInvalid={!!formik.touched.model && !!formik.errors.model}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.model as ReactNode}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formYear" className="mb-3 fw-bold">
            <InputLabel>Ano</InputLabel>
            <InputArea
              type="text"
              placeholder="Digite o ano com 4 dígitos"
              {...formik.getFieldProps("year")}
              isInvalid={!!formik.touched.year && !!formik.errors.year}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.year as ReactNode}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPlate" className="mb-4 fw-bold">
            <InputLabel>Placa</InputLabel>
            <InputArea
              type="text"
              placeholder="Digite a placa"
              {...formik.getFieldProps("plate")}
              isInvalid={!!formik.touched.plate && !!formik.errors.plate}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.plate as ReactNode}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <InputLabel className="fw-bold mb-4">Estado do Veículo</InputLabel>
          <Form.Select
            className="mb-3"
            {...formik.getFieldProps("rating")}
            isInvalid={!!formik.touched.rating && !!formik.errors.rating}
          >
            <option>Estado do veículo</option>
            <option value="Excelente">Excelente</option>
            <option value="Bom">Bom</option>
            <option value="Ruim">Ruim</option>
          </Form.Select>
          <InputLabel className="fw-bold">Upload de Fotos</InputLabel>
          <Dropzone
            onDrop={(acceptedFiles) =>
              formik.setFieldValue("images", acceptedFiles)
            }
          />
        </Col>
      </Row>
      <div className="d-flex align-items-center gap-3 justify-content-center mb-3">
        <PillButton type="submit" label="Salvar" />
        <PillButton type="button" label="Cancelar" route="/" color="orange" />
      </div>
    </Form>
  );
};

export default VehicleForm;
