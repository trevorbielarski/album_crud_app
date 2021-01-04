package com.bielarski.aws.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class DynamoDBConfig implements WebMvcConfigurer {

    private static final String SERVICE_ENDPOINT = "dynamodb.us-east-1.amazonaws.com";
    private static final String REGION = "us-east-1";
    private static final String ACCESS_KEY = "[HIDDEN]";
    private static final String SECRET_KEY = "[HIDDEN]";

    @Bean
    public DynamoDBMapper mapper() {
        return new DynamoDBMapper(dynamoDBConfig());
    }

    private AmazonDynamoDB dynamoDBConfig() {
        return AmazonDynamoDBClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(SERVICE_ENDPOINT, REGION))
                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY)))
                .build();
    }

}
