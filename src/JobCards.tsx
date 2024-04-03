import { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

export function JobCards(props: JobCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card>
        <Card.Header onClick={() => setOpen(!open)}>
          <button className="btn btn-link" type="button">
            {props.name}
          </button>
        </Card.Header>
        <Collapse in={open}>
          <div>
            <Card.Body>
              <Card.Title>{props.company}</Card.Title>
              <Card.Subtitle>{props.timeFrame}</Card.Subtitle>
              {props.list}
            </Card.Body>
          </div>
        </Collapse>
      </Card>
    </>
  );
}
interface JobCardProps {
  name: string;
  company: JSX.Element | string;
  timeFrame: string;
  list: JSX.Element;
}