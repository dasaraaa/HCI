import {
    Card,
    CardHeader,
    CardBody,
  
    Typography,
  } from "@material-tailwind/react";
  import img2 from '../images/column-chart-line-icon.png'
  import img3 from '../images/stethoscope-icon.png'
  import img4 from '../images/programmer-computer-icon.png'
  import img5 from '../images/credit-card-icon.png'
  import img6 from '../images/hand-money-income-dollar-icon.png'
  import img7 from '../images/decrease-graph-recession-icon.png'

   
  export default function JobCard() {
    const stats = [
        { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
        { id: 2, name: 'Assets under holding', value: '$119 trillion' },
        { id: 3, name: 'New users annually', value: '46,000' },
      ]
    return (
        <div>
             <div className="bg-[#B6EAFA]/[0.5] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
        <div className="grid grid-cols-3 bg-[#E6FFFD] gap-3 place-items-center h-screen">
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={img2} className="w-[140px] py-[55px] m-auto" alt="profile-picture" />
          <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
           Corporate
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
           21 jobs
          </Typography>
        </CardBody>
        </CardHeader> 
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={img3} className="w-[140px] py-[55px] m-auto" alt="profile-picture" />
          <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
           Health/Medical
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
           2 jobs
          </Typography>
        </CardBody>
        </CardHeader> 
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={img4} className="w-[140px] py-[55px] m-auto" alt="profile-picture" />
          <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
           IT
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
           31 jobs
          </Typography>
        </CardBody>
        </CardHeader> 
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={img5} className="w-[140px] py-[55px] m-auto" alt="profile-picture" />
          <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
           CoopyWritting
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
           21 jobs
          </Typography>
        </CardBody>
        </CardHeader> 
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={img6} className="w-[140px] py-[55px] m-auto" alt="profile-picture" />
          <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
           Finace
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
           21 jobs
          </Typography>
        </CardBody>
        </CardHeader> 
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={img7} className="w-[140px] py-[55px] m-auto" alt="profile-picture" />
          <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
           Corporate
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
           21 jobs
          </Typography>
        </CardBody>
        </CardHeader> 
      </Card>
</div>
</div>
    );
  }