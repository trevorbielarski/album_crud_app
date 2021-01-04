package com.bielarski.aws.api;

import com.bielarski.aws.entity.Album;
import com.bielarski.aws.repository.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController 
public class AlbumController {

    @Autowired
    private AlbumRepository repository;

    @PostMapping("/addAlbum") 
    public Album addAlbum(@RequestBody Album album) {
        return repository.addAlbum(album);
    }

    @GetMapping("/getAlbum/{albumId}") 
    public Album getAlbumById(@PathVariable String albumId) {
        return repository.findAlbumById(albumId);
    }

    @GetMapping("/getAllAlbums") 
    public List<Album> getAllAlbums() {
        return repository.findAllAlbums();
    }

    @DeleteMapping("/deleteAlbum")
    public ResponseEntity<String> deleteAlbum(@RequestBody Album album) {
        return repository.deleteAlbum(album);
    }

    @PutMapping("/updateAlbum")
    public ResponseEntity<Album> updateAlbum(@RequestBody Album album) {
        return repository.editAlbum(album);
    }

}
