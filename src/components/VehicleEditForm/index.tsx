import { useFormik } from "formik";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { VehicleType } from "../../@types/VehicleType";
import { validationSchema } from "../../Schema";
import Dropzone from "../Dropzone";
import PillButton from "../PillButton";
import { InputArea, InputLabel } from "./styles";

interface VehicleEditFormProps {
  vehicle: VehicleType;
  onSubmit: (plate: string, vehicle: VehicleType) => void;
}

const VehicleEditForm = ({ vehicle, onSubmit }: VehicleEditFormProps) => {
  const navigateTo = useNavigate();

  const formik = useFormik({
    initialValues: {
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year,
      plate: vehicle.plate,
      rating: vehicle.rating,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(vehicle.plate, values);
      navigateTo("/");
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="mt-4"
      data-testid="vehicle-edit-form-container"
    >
      <Row xs={1} lg={2} className="mb-3">
        <Col>
          <Form.Group controlId="formBrand" className="mb-3 fw-bold">
            <InputLabel>Marca</InputLabel>
            <InputArea
              data-testid="brand-input"
              type="text"
              placeholder="Digite a marca"
              {...formik.getFieldProps("brand")}
              isInvalid={!!formik.touched.brand && !!formik.errors.brand}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.brand}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formModel" className="mb-3 fw-bold">
            <InputLabel>Modelo</InputLabel>
            <InputArea
              data-testid="model-input"
              type="text"
              placeholder="Digite o modelo"
              {...formik.getFieldProps("model")}
              isInvalid={!!formik.touched.model && !!formik.errors.model}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.model}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formYear" className="mb-3 fw-bold">
            <InputLabel>Ano</InputLabel>
            <InputArea
              data-testid="year-input"
              type="number"
              placeholder="Digite o ano"
              {...formik.getFieldProps("year")}
              isInvalid={!!formik.touched.year && !!formik.errors.year}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.year}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPlate" className="mb-4 fw-bold">
            <InputLabel>Placa</InputLabel>
            <InputArea
              data-testid="plate-input"
              type="text"
              placeholder="Digite a placa"
              {...formik.getFieldProps("plate")}
              isInvalid={!!formik.touched.plate && !!formik.errors.plate}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.plate}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <InputLabel className="fw-bold mb-4">Estado do Veículo</InputLabel>
          <Form.Select
            {...formik.getFieldProps("rating")}
            isInvalid={!!formik.touched.rating && !!formik.errors.rating}
            className="mb-4"
          >
            <option>Estado do veículo</option>
            <option value="excelente">Excelente</option>
            <option value="bom">Bom</option>
            <option value="ruim">Ruim</option>
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

export default VehicleEditForm;
