package com.bielarski.aws.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.bielarski.aws.entity.Album;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class AlbumRepository {

    @Autowired
    private DynamoDBMapper mapper;

    public Album addAlbum(Album album) {
        mapper.save(album);
        return album;
    }

    public Album findAlbumById(String id) {
        return mapper.load(Album.class, id);
    }

    public List<Album> findAllAlbums() {
        return mapper.scan(Album.class, new DynamoDBScanExpression());
    }

    public ResponseEntity<String> deleteAlbum(Album album) {
        mapper.delete(album);
        return new ResponseEntity<>("The following album has been deleted: " + album.getAlbumName(), HttpStatus.OK);
    }

    public ResponseEntity<Album> editAlbum(Album album) {
        mapper.save(album, buildExpression(album));
        return new ResponseEntity<>(album, HttpStatus.OK);
    }

    private DynamoDBSaveExpression buildExpression(Album album) {
        DynamoDBSaveExpression dynamoDBSaveExpression = new DynamoDBSaveExpression();
        Map<String, ExpectedAttributeValue> expectedMap = new HashMap<>();
        expectedMap.put("albumId", new ExpectedAttributeValue(new AttributeValue().withS(album.getAlbumId())));
        dynamoDBSaveExpression.setExpected(expectedMap);
        return dynamoDBSaveExpression;
    }
}
