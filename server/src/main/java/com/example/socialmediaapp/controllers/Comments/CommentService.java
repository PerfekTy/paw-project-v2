package com.example.socialmediaapp.controllers.Comments;

import com.example.socialmediaapp.models.Comment;
import com.example.socialmediaapp.repositories.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    public Comment createComment(String commentBody, String commentImage) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated()) {
            String loggedUser = authentication.getName();
            LocalDateTime createdAt = LocalDateTime.now();
            Random random = new Random();
            String randomId = String.valueOf(random.nextLong(Long.MAX_VALUE) + 1);

            Comment comment = new Comment();
            comment.setUsername(loggedUser);
            comment.setIdd(randomId);
            comment.setCommentBody(commentBody);
            comment.setCommentImage(commentImage);
            comment.setCreatedAt(createdAt);

            return commentRepository.save(comment);
        }
        throw new Exception("User is not authenticated");
    }
}
