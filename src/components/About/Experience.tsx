import { Box, Typography, Grid } from '@mui/material'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import SchoolIcon from '@mui/icons-material/School'

const experienceData = [
  {
    title: 'Full-stack developer',
    company: 'AVAIT UG ',
    period: '01.2023-Present',
    description:
      'Development of both front-end and back-end components for a comprehensive web application. This includes implementing responsive user interfaces using modern frameworks and ensuring seamless integration with the server-side architecture. Creation and optimization of databases to efficiently store and retrieve data while implementing robust data security measures to safeguard sensitive information. Design and implementation of functional elements such as interactive forms, dynamic content loading, and user-friendly navigation to enhance the overall application experience.',
  },
  {
    title: 'Front-end developer',
    company: 'IT-TUTOR',
    period: '07.2024-09.2024',
    description:
      'Development of the frontend of the web application with a special focus on the design and implementation of user-friendly UI components that ensure an optimal user experience. Great emphasis is placed on a responsive design that enables cross-device adaptation in order to offer high functionality and aesthetics on smartphones, tablets and desktop computers alike. Also, mechanisms for the secure processing of data on the client side are implemented to ensure both data security and the protection of user privacy.',
  },
  {
    title: 'Intern(Front-end)',
    company: 'Foodba',
    period: '01.2021-08.2021',
    description:
      'Development of the frontend for the web application with a focus on creating an intuitive and engaging user interface that ensures a positive user experience. This includes the design and implementation of design concepts, including the development of a consistent visual appearance and the application of UX principles. Furthermore, special emphasis is placed on the creation of functional elements of the application, such as interactive components, forms, navigation elements and dynamic content that support and enhance the overall functionality of the web application.',
  },
]

const educationData = [
  {
    title: 'Student, T-Course',
    institution: 'Studienkolleg Hamburg',
    period: '08.2024–07.2025',
    description:
      'Completion of the preparatory college with a successful assessment test (FSP), which serves as a qualification for starting a specialist course in Germany. The T course focuses on preparation for later studies. German language skills are deepened to an academic level in order to successfully complete the course in German. Moreover, there is an intensive examination of technical fundamentals in mathematics, physics and computer science.',
  },
  {
    title: 'Software developer',
    institution: 'IT-Academy "Step"',
    period: '04.2019-10.2021',
    description:
      'Completion of training or a diploma as a software developer with comprehensive knowledge of modern programming languages ​​and technologies. This includes the development of web applications with JavaScript, HTML and CSS, software solutions with C++ and applications based on C# and .NET. In addition, knowledge of server-side programming with Node.js and front-end development with Angular and React was imparted. Specialization was in Java programming and Android development, which gave the student a solid skill set in creating modern software solutions.',
  },
  {
    title: 'Schooler',
    institution: 'Gymnasium No. 31, Zaporizhzhia',
    period: '09.2012-06.2023',
    description:
      'Completion of school education with successful acquisition of wonderful knowledge in mathematics, science, languages ​​and computer science. During school, important social and organizational skills were developed that serve as a basis for further academic and professional careers.',
  },
]

const Experience = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '2rem 1rem', md: '4rem 2rem' },
        backgroundColor: '#1f1f2e',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* Заголовок */}
      <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 4 }}>
        COVER <span style={{ color: '#34d399' }}>LETTER</span>
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }} justifyContent='center'>
        {/* Опыт работы */}
        <Grid item xs={12} md={6}>
          <Box className='flex gap-2'>
            <WorkHistoryIcon fontSize='large' className='mt-0.5 text-[#34d399]' />
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
              Working Experience
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', pl: 4 }}>
            {/* Вертикальная линия */}
            <Box
              sx={{
                position: 'absolute',
                left: '36px',
                top: 10,
                bottom: 0,
                width: '2px',
                backgroundColor: '#374151',
              }}
            />
            {experienceData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  mb: 4,
                  display: 'flex',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Точка на линии */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#34d399',
                    borderRadius: '50%',
                  }}
                />
                <Box sx={{ textAlign: 'left', ml: 3 }}>
                  <Typography
                    variant='h6'
                    sx={{ color: '#34d399', fontWeight: 'bold', fontSize: '1.1rem' }}
                  >
                    {item.title}{' '}
                    <span style={{ fontSize: '0.9rem', color: '#cfcfcf' }}>({item.period})</span>
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{ fontStyle: 'italic', color: '#cfcfcf', mb: 1 }}
                  >
                    {item.company}
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Образование */}
        <Grid item xs={12} md={6}>
          <Box className='flex gap-2'>
            <SchoolIcon fontSize='large' className='mt-0.5 text-[#34d399]' />
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
              Education
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', pl: 4 }}>
            {/* Вертикальная линия */}
            <Box
              sx={{
                position: 'absolute',
                left: '36px',
                top: 10,
                bottom: 0,
                width: '2px',
                backgroundColor: '#374151',
              }}
            />
            {educationData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  mb: 4,
                  display: 'flex',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Точка на линии */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#34d399',
                    borderRadius: '50%',
                  }}
                />
                <Box sx={{ textAlign: 'left', ml: 3 }}>
                  <Box>
                    <Typography
                      variant='h6'
                      sx={{ color: '#34d399', fontWeight: 'bold', fontSize: '1.1rem' }}
                    >
                      {item.title}{' '}
                      <span style={{ fontSize: '0.9rem', color: '#cfcfcf' }}>({item.period})</span>
                    </Typography>
                  </Box>
                  <Typography
                    variant='subtitle1'
                    sx={{ fontStyle: 'italic', color: '#cfcfcf', mb: 1 }}
                  >
                    {item.institution}
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Experience
