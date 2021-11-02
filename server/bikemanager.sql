CREATE TABLE `Competitor` (
    `CompId` int(3) NOT NULL AUTO_INCREMENT,
    `Name` varchar(70) COLLATE utf8mb4_unicode_ci  NOT NULL AUTO_INCREMENT,
    `Photo` blob NOT NULL,
    `Birthday` date NOT NULL,
    `School` varchar(35) COLLATE utf8mb4_unicode_ci NOT NULL,
    `LogId` int(3),
    PRIMARY KEY (`CompId`),
    FOREIGN KEY (`LogId`) REFERENCES `Competitor` (`CompId`) 
);

CREATE TABLE `Login` (
    `LogId` int(3) NOT NULL AUTO_INCREMENT,
    `Username` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL AUTO_INCREMENT,
    `Password` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`LogId`),
);

CREATE TABLE `Entries` (
    `EntriesId` int(3) NOT NULL AUTO_INCREMENT,
    `CompId` int(3) NOT NULL,
    `RaceId` int(11) NOT NULL,
    `FinishTime` time NOT NULL,
    `EntryStatus` tinyint(1) NOT NULL,
    PRIMARY KEY (`EntriesId`),
    FOREIGN KEY (`CompId`, `RaceId`) REFERENCES `Entries` (`EntriesId`) 
);

CREATE TABLE `Event` (
    `RaceId` int(3) NOT NULL AUTO_INCREMENT,
    `RaceName` varchar(35) COLLATE utf8mb4_unicode_ci NOT NULL,
    `RaceDescription` text COLLATE utf8mb4_unicode_ci NULL,
    `StartDate` date NULL,
    `StartTime` time NOT NULL,
    PRIMARY KEY (`RaceId`),
    
);



