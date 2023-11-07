package com.example.socialmediaapp.controllers;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostResponse {
    private String username;
    private String postImage;
    private String postBody;
    private LocalDateTime createdAt;
}
