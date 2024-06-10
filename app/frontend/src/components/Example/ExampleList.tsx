import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "I see you're involved in a comprehensive data cleansing project. Can you share more about how you're handling the normalization and correction of customer records?",
    "The weekly data cleansing process seems intensive. How do you ensure that the master records are correctly assigned every week?",
    "I'm interested in learning more about the proposed 'To-Be' Golden Record process. How does the delta mechanism help in maintaining data accuracy?"
    // "Can you explain the role of composite similarity scores in your golden record process?",
    // "The IBM DataStage Matching Process document outlines several match comparison types. Which comparison type do you find most effective for your data?",
    // "How do you handle the agreement and disagreement weights in your composite weight calculations for matching records?",
    // "The PPC Data Cleansing project mentions the creation of 'Golden Records' and normalization of names and addresses. What challenges have you faced in this process?",
    // "How effective has the Terra DB been in cleaning and normalizing address data for the PPC project?",
    // "I see that the HEDNO project involves creating new registries and developing AI algorithms for data cleansing. Could you elaborate on the AI algorithms being developed?",
    // "What are the key legal and regulatory considerations you need to keep in mind for the HEDNO Master Data Cleansing project?",
    // "The proposed architecture for data cleansing includes several enhancements like stable Golden Record IDs and extended outputs. How do these improvements benefit the overall data quality?",
    // "Can you discuss the integration of new fields such as gender and corrected email into your system architecture?",
    // "Data security is crucial, especially with GDPR regulations. How do you ensure compliance during your data cleansing processes?",
    // "What measures are in place to secure data during its transfer and processing in cloud environments?",
    // "Training is a significant part of your projects. How do you ensure effective knowledge transfer to your internal teams?",
    // "What kind of training programs do you have in place to familiarize your team with the new data cleansing algorithms and processes?",
    // "Could you walk me through your approach for the 'Project Methodology Study' in the first month? How do you ensure the methodology aligns with your project goals?",
    // "In the initial phase of analyzing the 'Current State of Systems and Data,' what key metrics are you focusing on to evaluate the existing data quality?",
    // "Can you describe the tools and frameworks you plan to use for the 'Current State Analysis' of systems and data?",
    // "Could you explain your approach to handling duplicate records during the data cleansing process?",
    // "What are the key indicators you look for to determine the reliability of a Golden Record?",
    // "In the Wemetrix proposal, how do you manage the data flow between different stages of cleansing and analysis?",
    // "What specific benefits have you observed from using Azure Synapse Analytics in your data cleansing projects?",
    // "How do you handle the integration of legacy systems with modern cloud-based architecture in your data projects?",
    // "What continuous improvement methodologies do you follow to refine your data management practices?",
    // "In the 'DEDDHE Staging' sheet, what are the primary data points you are focusing on for your analysis?",
    // "How do you handle discrepancies found in the staging data before moving it to the final dataset?",
    // "Can you walk me through the process of how data in the 'DEDDHE Staging' sheet is prepared for further processing or analysis?",
    // "How do you ensure consistency between the data in 'DEDDHE Staging' and the 'HEDNO_MASTER_DATA_MATRIX'?",
    // "What role does each dataset play in your overall data management and cleansing strategy?",
    // "In your common_functions.txt script, you have a function for adding an ingestion date. How critical is this step in your data pipeline, and what challenges do you face in ensuring accurate timestamps?",
    // "Your _connect synapse (1).txt script outlines the connection process to Azure Synapse using JDBC and ODBC. Can you share some best practices for managing these connections efficiently?",
    // "In GoldenRecordGR.txt, how do you ensure that the golden records are maintained accurately over time, especially with incoming new data?",
    // "Your B2B_names_normalization.txt file mentions normalizing company names based on VAT IDs. What are the most common issues you encounter during this normalization process?",
    // "In CAs_discard.txt, you perform fuzzy matching on certain records. Could you explain how you determine the threshold for considering a match significant?",
    // "In AFM_discard.txt, you have a detailed process for discarding unwanted VAT IDs. How do you validate that the remaining data is clean and accurate?",
    // "The email_correction.txt script has a detailed process for correcting email addresses. What are the common issues you encounter with email data, and how do you address them?",
    // "In gender_identification.txt, you use multiple methods to determine gender. Which method do you find most reliable, and why?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compare the impact of interest rates and GDP in financial markets.",
    "What is the expected trend for the S&P 500 index over the next five years? Compare it to the past S&P 500 performance",
    "Can you identify any correlation between oil prices and stock market trends?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
