

import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Music Trends for High-End Events in 2024",
      description: "Discover the hottest music trends that are shaping the industry this year.",
      link: "https://www.theaterscene.net/features/top-ten-music-trends/jack-quinn/",
      image: "https://d1vvuf3f66vs33.cloudfront.net/2023/10/1_VQxFxU5ueLX26yZpaMV-Fg.png",
    },
    {
      id: 2,
      title: "Interview with Rising Star Sid Sriram",
      description: "An exclusive interview with the talented artist Sid Sriram about his upcoming projects.",
      link: "https://officemagazine.net/sid-sriram%E2%80%99s-digs-deep",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uEPSMkwtGbmB_j0fkvwx9EMXDJO-oTjJiw&usqp=CAU",
    },
    {
      id: 3,
      title: "The Evolution of Jazz Music",
      description: "A deep dive into the history and evolution of jazz music over the decades.",
      link: "https://www.ohjazz.tv/mag/the-evolution-of-jazz-music",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzv8_eGYrVF5rNkxpLSPw0om3B5BHp1A7OA&usqp=CAU",
    },
    {
      id: 4,
      title: "The Best Music Festivals to Attend in 2024",
      description: "Get the lowdown on the must-attend music festivals around the world this year.",
      link: "https://govisit.guide/feature/the-best-music-festivals-to-attend-in-2024/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvCi2pX3zabU8Z-pyv-8XO-5gtiWNb2kk7A&usqp=CAU",
    },
    {
      id: 5,
      title: "Exploring the Fusion of Classical and Electronic Music",
      description: "How classical music and electronic elements are blending to create new soundscapes.",
      link: "https://blog.waproduction.com/exploring-the-fusion-of-edm-and-classical-music",
      image: "https://i3.wp.com/www.thetalentedindian.com/wp-content/uploads/2022/08/Fusion.jpeg",
    },
    {
      id: 6,
      title: "The Impact of Streaming on the Music Industry",
      description: "An analysis of how streaming services are changing the landscape of the music industry.",
      link: "https://www.weforum.org/agenda/2023/03/charted-the-impact-of-streaming-on-the-music-industry/",
      image: "https://www.shutterstock.com/image-photo/music-player-on-screen-mobile-600nw-1932556799.jpg",
    },
    {
      id: 7,
      title: "Up-and-Coming Indie Artists to Watch",
      description: "A spotlight on emerging indie artists who are making waves in the music scene.",
      link: "https://www.lemon8-app.com/discover/up-and-coming%20indie%20artists%20to%20watch?region=us",
      image: "https://beat.com.au/wp-content/uploads/2019/08/Snow-Patrol-11-e1565574860146.jpg",
    },
    {
      id: 8,
      title: "How Music Therapy is Transforming Mental Health",
      description: "Exploring the benefits of music therapy for mental health and wellness.",
      link: "https://careme.health/blog/music-therapy-the-therapeutic-benefits-of-music-on-mental-health",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77NTN60Qgu46cL_qJGfKpwjtoBYxJkR1c_A&usqp=CAU",
    },
    {
      id: 9,
      title: "The Revival of Vinyl Records",
      description: "Why vinyl records are making a comeback and what it means for music enthusiasts.",
      link: "https://indigomusic.com/feature/resonance-of-nostalgia-the-revival-of-vinyl-records-in-the-digital-age#:~:text=The%20revival%20of%20vinyl%20records%20is%20more%20than%20just%20a,connections%20between%20music%20and%20listener.",
      image: "https://nchsinkspot.com/wp-content/uploads/2023/09/IMG_5778-1200x900.jpg",
    },
    {
      id: 10,
      title: "Iconic Music Albums Turning 20 in 2024",
      description: "A look back at classic albums from 2004 that are still influencing music today.",
      link: "https://www.yardbarker.com/entertainment/articles/which_albums_are_turning_20_in_2024/s1__39633697",
      image: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_0/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/8/5/85b33b1c0fe46d8241b58a60505138ef68ff0d82/albums-turning-20-2024.jpg",
    },
  ];

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      overflowY: 'auto',
    },
    headerImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    readMe: {
      width: '100%',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      textAlign: 'center',
    },
    main: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      width: '100%',
    },
    post: {
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    postImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
    content: {
      padding: '15px',
    },
    title: {
      margin: '0 0 10px',
      fontSize: '1.5rem',
      color: '#333',
    },
    description: {
      margin: '0 0 10px',
      color: '#666',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    linkHover: {
      textDecoration: 'underline',
    }
  };

  return (
    <div style={styles.container}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlXTqSmNrnsRUH24n0PDQg-HTMVQ3inoXuSImARMyDuvYI1pq7MFHHOh7-Deaf1CxSw&usqp=CAU"
        alt="Music App Header"
        style={styles.headerImage}
      />
      <div style={styles.readMe}>
        <h2>Read Me</h2>
        <p>Welcome to our music blog! Here you'll find the latest news, updates, and stories from the world of music. Stay tuned for more exciting content and insights!</p>
      </div>
      <main style={styles.main}>
        {blogPosts.map(post => (
          <article key={post.id} style={styles.post}>
            <img src={post.image} alt={post.title} style={styles.postImage} />
            <div style={styles.content}>
              <h2 style={styles.title}>{post.title}</h2>
              <p style={styles.description}>{post.description}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Read more
              </a>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Blog;
