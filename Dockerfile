FROM maven:3.9.6 as builder

WORKDIR /app
COPY ./app .

RUN mvn clean package

FROM openjdk:21
WORKDIR /app
COPY --from=builder /app/target/app-1.0-SNAPSHOT.jar /app

CMD ["java", "-jar", "app-1.0-SNAPSHOT.jar"]