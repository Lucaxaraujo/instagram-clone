import React from 'react';
import {
  FlatList, 
  Image, 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

function Feed() {
  const posts = [
    {
      id:'1',
      author: 'lucaxaraujo_',
      place: 'Taubaté',
      picture_url: 'https://avatars.githubusercontent.com/u/69488947?v=4',
      likes: 271,
      description: 'Instagram clone using React Native! :D',
      hashtags: '#ReactNative #InstagramClone'

    }, 
    {
      id:'2',
      author: 'rocketseat_oficial',
      place: '',
      picture_url: 'https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg',
      likes: 10538,
      description: 'Rocketseat example post',
      hashtags: '#Rocketseat #InstagramClone'

    },        
    {
      id:'3',
      author: 'dieegosf',
      place: 'Rocketseat',
      picture_url: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      likes: 3021,
      description: 'CTO at @rocketseat_oficial',
      hashtags: '#ReactNative #InstagramClone'

    },    
    {
      id:'4',
      author: 'maykbrito',
      place: '',
      picture_url: 'https://avatars.githubusercontent.com/u/6643122?v=4',
      likes: 2476,
      description: 'Instructor at @rocketseat_oficial',
      hashtags: '#ReactNative #InstagramClone'

    }        
  ];

  function renderItem({item: post}) {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>            
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>      

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />              
            </TouchableOpacity>
          </View>
        </View>
        
        <View>
            <Image 
              style={styles.picture_url} 
              source={{ uri: post.picture_url }}
            />
        </View>

        <View style={styles.footer}> 
          <View style={styles.actions}>            
            <View style={styles.leftActions}> 
              <TouchableOpacity style={styles.action}>
                <Image source={like} />              
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />              
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />              
              </TouchableOpacity>
            </View>

            <View> 
              <TouchableOpacity>
                <Image source={save} />              
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.description}>{post.description}</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
          </View>
                  
        </View>        
      </View>
    )
  };

  return (
    <View>
      <FlatList 
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  post:{
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place:{
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  postOptions: {},
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  description: {
    color: '#000',
    lineHeight: 18
  },
  hashtags: {
    color: '#002d5e'
  }
});

export default Feed;
