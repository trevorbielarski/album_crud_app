package com.bielarski.aws.entity;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamoDBTable(tableName = "albums")
public class Album implements Serializable {

    @DynamoDBHashKey (attributeName = "albumId")
    @DynamoDBAutoGeneratedKey
    private String albumId;
    @DynamoDBAttribute
    private String albumName;
    @DynamoDBAttribute
    private String artistName;
    @DynamoDBAttribute
    private String genre;
    @DynamoDBAttribute
    private int releaseYear;

}