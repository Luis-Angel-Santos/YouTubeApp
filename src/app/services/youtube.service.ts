import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyCOA8Ve5kIgF-dKbq9FcniOAMLoqVheGWU';
  private playlist = 'UUFR2oaNj02WnXkOgLH0iqOA';
  private nextPageToken = '';

  constructor(private http: HttpClient) {  }

  getVideos(){
    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apikey)

    return this.http.get(url, {params});
  }
}
