import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function BasicCard({data}) {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            className="object-cover"
            src="images/samurai_house2.png"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.theme}
          </Typography>
          <Typography>
            {data.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Tovább</Button>
        </CardFooter>
      </Card>
    );
  }